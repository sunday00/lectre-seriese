const mongoose = require('mongoose');
const validator = require('validator');

const AppError = require('../helpers/BasicError');

const Tour = require('./Tour');

const reviewScheme = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty!']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

reviewScheme.index({ tour: 1, user: 1 }, { unique: true });

reviewScheme.virtual('').set(function() {

});
reviewScheme.virtual('').get(function() {
  return null;
});

reviewScheme.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

reviewScheme.pre(/^find/, function(next) {
  // this.populate({
  //   path: 'tour',
  //   select: ['name', '_id']
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // });
  this.populate({
    path: 'user',
    select: 'name photo'
  });
  next();
});

reviewScheme.statics.calcAverageRatings = async function(tour) {
  const stat = await this.aggregate([
    {
      $match: { tour }
    },
    {
      $group: {
        _id: '$tour',
        length: { $sum: 1 },
        avg: { $avg: '$rating' }
      },
    }
  ]);

  if (stat.length > 0) {
    await Tour.findByIdAndUpdate(tour, {
      ratingsQuantity: stat[0].length,
      ratingsAverage: stat[0].avg
    });
  } else {
    await Tour.findByIdAndUpdate(tour, {
      ratingsQuantity: 0,
      ratingsAverage: 5
    });
  }
  return stat;
};

reviewScheme.post('save', function(next) {
  this.constructor.calcAverageRatings(this.tour);
});

reviewScheme.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next();
});

reviewScheme.post(/^findOneAnd/, async function(docs, next) {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

reviewScheme.methods.test = async (a, b) => {

};

const Review = mongoose.model('Review', reviewScheme);

module.exports = Review;
