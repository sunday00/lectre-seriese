const path = require('path');
const multer = require('multer');
const sharp = require('sharp');

const Controller = require('./Controller');
const Alias = require('./alias/user');
const ObjectHelper = require('../helpers/ObjectHelper');
const AppError = require('../helpers/BasicError');

module.exports = class UserController extends Controller {
  constructor(model, tour, booking) {
    super(model);
    this.tour = tour;
    this.booking = booking;
    this.alias = new Alias();
  }

  me = this.catcher(async (req, res, next) => {
    const user = await this.model.findById(req.user.id);
    this.response(res, 200, { user });
  });

  resizeImage = this.catcher(async (req, res, next) => {
    if(! req.file) return next();
    req.file.filename = `user-${req.user.id}-${Date.now()}.jpg`;
    await sharp( req.file.buffer )
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({quality: 100})
      .toFile(path.join(__dirname, `../public/img/users/${req.file.filename}`));

    next();
  });

  upload = multer({
    storage: this.multerStorage,
    filter: this.multerFilter
  }).single('photo');

  update = this.catcher(async (req, res, next) => {
    const { password, passwordConfirm } = req.body;
    if (password || passwordConfirm)
      return next(new AppError('This api is not support modify password. use reset-password api', 400));

    try {
      const data = ObjectHelper.filter(req.body, 'name', 'email');

      if( req.file && req.file.fieldname === 'photo'){
        data.photo = req.file.filename;
      }

      data.skipPwValidate = true;

      const user = await this.model.findByIdAndUpdate(req.user.id, data, {
        new: true,
        runValidators: true
      });

      this.response(res, 200, { user, message: 'done' });
    } catch (err) {
      return next(new AppError(err.message, 500));
    }
  });

  delete = this.catcher(async (req, res, next) => {
    //hard delete
    // const user = await this.model.findByIdAndDelete(req.user.id);

    //soft delete
    const user = await this.model.findByIdAndUpdate(req.user.id, {
      active: false,
      skipPwValidate: true
    });

    if (!user) return next(new AppError('not found', 404));
    this.response(res, 204, { user, message: 'done' });
  });

  history = this.catcher(async (req, res, next) => {
    const bookings = await this.booking.find({ user: req.user.id });
    if (!bookings) return next(new AppError('not found', 404));

    const toursIds = bookings.map(v => v.tour.id);
    const data = await this.tour.find({ _id: { $in: toursIds } });

    // this.response(res, 200, { tours });
    return res.status(200).render('overview', {
      title: 'history',
      data
    });
  });
};
