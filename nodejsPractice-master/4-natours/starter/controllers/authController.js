const crypto = require('crypto');
// const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const Controller = require('./Controller');
const Alias = require('./alias/user');
const AppError = require('../helpers/BasicError');
// const sendEmail = require('../helpers/Email');
const Email = require('../helpers/Email');

module.exports = class AuthController extends Controller {
  constructor(model) {
    super(model);
    this.alias = new Alias();
  }

  store = this.catcher(async (req, res) => {
    const { NODE_ENV } = process.env;
    const user = await this.model.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: NODE_ENV === 'development' ? req.body.role : 'user'
    });

    await new Email(user, `${process.env.APP_URL}/me`).send('Welcome to the Natours Family!', 'welcome');

    user.generateToken(req, res, user._id);

    this.response(res, 201, { user });
  });

  update = this.catcher(async (req, res, next) => {
    const user = await this.model.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
      },
      {
        new: true,
        runValidators: true
      }
    );
    if (!user) return next(new AppError('Not Found', 404));

    this.response(res, 200, { user });
  });

  login = this.catcher(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError('Email or PW is empty', 400));
    }

    const user = await this.model.findOne({ email }).select('+password');
    if (!user || !(await user.isPWCorrect(req.body.password, user.password))) {
      return next(new AppError('Email or PW is wrong', 401));
    }

    user.generateToken(req, res, user._id);

    this.response(res, 200, { user });
  });

  logout = this.catcher(async (req, res, next) => {
    const user = await this.model.findById(req.user.id);
    if (!user) return next(new AppError('already logged out'));
    user.expireToken(res);
    this.response(res, 200, { message: 'done' });
  });

  protect = this.catcher(async (req, res, next) => {
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) return next(new AppError('Sign in please', 401));

    const { JWT_SECRET } = process.env;
    const { id, iat } = await jwt.verify(token, JWT_SECRET);
    const user = await this.model.findById(id);
    if (!id || !user) return next(new AppError('user is not exists', 401));

    if (user.isChangePasswordAfterIssuingToken(iat)) {
      return next(new AppError('this token is no longer valid', 401));
    }

    req.user = user;
    res.locals.user = user;

    next();
  });

  restrict = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(new AppError('You logged, But Permission denied', 403));
      }
      next();
    };
  };

  isLoggedIn = this.catcher(async (req, res, next) => {
    if (!req.cookies.jwt) return next();

    const { JWT_SECRET } = process.env;
    const { id, iat } = await jwt.verify(req.cookies.jwt, JWT_SECRET);
    const user = await this.model.findById(id);
    if (!id || !user) return next();

    if (user.isChangePasswordAfterIssuingToken(iat)) return next();

    res.locals.user = user;

    next();
  });

  forgotPassword = this.catcher(async (req, res, next) => {
    const user = await this.model.findOne({ email: req.body.email });
    if (!user) return next(new AppError('Not found via this email', 404));

    const t = user.createPasswordResetToken();
    user.shouldNotPwValidate = true;
    await user.save({ validateBeforeSave: false });

    try {
      const resetURL = `${req.protocol}://${req.get('host')}/api/v1/auth/reset-password/${t}`;
      await new Email(user, resetURL).send('Password reset in 10min', 'forgot-password');

      this.response(res, 200, { message: 'done. check your email' });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new AppError(err), 500);
    }
  });

  resetPassword = this.catcher(async (req, res, next) => {
    const hashed = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex', null);

    const user = await this.model.findOne({ passwordResetToken: hashed, passwordResetExpires: { $gt: Date.now() } });

    if (!user) return next(new AppError('Token is invalid or expired', 400));

    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    user.generateToken(req, res, user._id);

    this.response(res, 200, { message: 'done.' });
  });

  updatePassword = this.catcher(async (req, res, next) => {
    const user = await this.model.findById(req.user.id).select('+password');
    const { password, newPasswordConfirm, newPassword } = req.body;
    if (!user || !(await user.isPWCorrect(password, user.password))) {
      return next(new AppError('failed with proving you are just you', 401));
    }

    user.password = newPassword;
    user.passwordConfirm = newPasswordConfirm;
    await user.save();

    user.generateToken(req, res, user._id);

    this.response(res, 200, { message: 'done.' });
  });
};
