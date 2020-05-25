const mongoose = require('mongoose');
const validator = require('validator');

const AppError = require('../helpers/BasicError');

const bookingScheme = new mongoose.Schema({
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour',
    required: [true, 'booking should be on Tour']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'booking should be on User']
  },
  price: {
    // Do not ref tour model. Tour model's price is current price, so always changeable. This is price at that time when customer do.
    type: Number,
    required: [true, 'price is needed']
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: true
  }
});

bookingScheme.pre(/^find/, function(next) {
  this.populate('user').populate({
    path: 'tour',
    select: 'name'
  });
  next();
});

const Booking = mongoose.model('Booking', bookingScheme);

module.exports = Booking;
