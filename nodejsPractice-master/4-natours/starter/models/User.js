const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const AppError = require('../helpers/BasicError');

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must have name']
  },
  email: {
    type: String,
    required: [true, 'User must have email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Email is not correctly passed']
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'must have pw'],
    min: [4, 'pw must longer then 4 characters'],
    select: false
  },
  passwordConfirm: {
    type: String,
    select: false
  },
  recentPasswordUpdatedAt: {
    type: Date,
    select: false
  },
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userScheme.virtual('shouldNotPwValidate').set(function(isActivate) {
  this.skipPwValidate = isActivate;
});
userScheme.virtual('shouldNotPwValidate').get(function() {
  return this.skipPwValidate;
});

userScheme.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

userScheme.pre(/^update|save|update$/i, function(next) {
  if (process.argv[4] === 'skip') return next();
  const passedData = this._update || this;
  if (this._update && this._update.skipPwValidate) {
    delete this._update.skipPwValidate;
    return next();
  }
  if (!passedData.passwordConfirm && !this.skipPwValidate) {
    throw new AppError('pw pwConfirm is not passed', 400);
  }
  if (passedData.password !== passedData.passwordConfirm) {
    throw new AppError('pw and pwConfirm must be same', 400);
  }
  next();
});

userScheme.pre(/^update|save|update$/i, function(next) {
  if (process.argv[4] === 'skip') return next();
  if ((typeof this.isModified === 'function' && !this.isModified('password')) || this.isNew) return next();
  this.recentPasswordUpdatedAt = Date.now() - 1000;
  // sometimes JWT is confused by when changed password, then issued token was validate failed.
  // so, just for work accurately, minus one second
  next();
});

userScheme.pre(/^update|save|update$/i, async function(next) {
  if (process.argv[4] === 'skip') return next();
  if (
    (typeof this.isModified === 'function' && !this.isModified('password')) ||
    (typeof this.isModified !== 'function' && !this._update.password)
  ) {
    return next();
  }

  if (this._update) {
    this._update.password = await bcrypt.hash(this._update.password, 12);
    delete this._update.passwordConfirm;
  } else {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  }

  next();
});

userScheme.post(/^update|save|update$/i, function(docs, next) {
  if (process.argv[4] !== 'false' && docs.password) {
    docs.password = undefined;
    docs.passwordConfirm = undefined;
  }
  next();
});

userScheme.methods.isPWCorrect = async (seneded, stored) => {
  return await bcrypt.compare(seneded, stored);
};

userScheme.methods.generateToken = (req, res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: `${process.env.JWT_EXPIRE}d` });
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.JWT_EXPIRE * 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production' || req.protocol === 'https',
    httpOnly: true
  });
  return token;
};

userScheme.methods.expireToken = res => {
  res.cookie('jwt', null, { expires: new Date(Date.now()) });
};

userScheme.methods.isChangePasswordAfterIssuingToken = function(JWTTime) {
  if (this.recentPasswordUpdatedAt) {
    return JWTTime < this.recentPasswordUpdatedAt.getTime() / 1000;
  }
  return false;
};

userScheme.methods.createPasswordResetToken = function() {
  // reset token. for send and show to user
  const resetToken = crypto.randomBytes(32).toString('hex');

  // hash token for save and keep.
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // when resetToken is coming, crypto can compare resetToken with saved token through resetToken hashing.

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userScheme);

module.exports = User;
