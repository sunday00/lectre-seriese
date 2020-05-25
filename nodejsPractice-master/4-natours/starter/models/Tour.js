const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const AppError = require('../helpers/BasicError');

// const user = require('./User');

const tourScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'tour needs name'],
      unique: true,
      trim: true,
      minlength: [3, 'name must have more then 3 length characters'],
      validate: {
        validator: function(v) {
          return validator.isAlphanumeric(v.replace(/\s/g, ''));
        },
        message: 'sorry. allowed only eng'
      }
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'tour needs duration']
    },
    maxGroupSize: {
      type: Number,
      default: 1
    },
    difficulty: {
      type: String,
      required: [true, 'tour needs difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: v => {
          return `the difficulty must be among ${v.enumValues.join(', ')}`;
        }
      }
    },
    ratingsAverage: {
      type: Number,
      default: 5,
      min: [1, 'rating must have above 1'],
      max: [5, 'rating must have under 5'],
      set: v => Math.round(v * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'tour needs price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        // but the this keyword is not working on update method. so when update, once pass this validate and another validate need
        validator: function(v) {
          // return v < this.price;
          return this.price ? v < this.price : true;
        },
        message: 'discount must be under price'
      }
    },
    summary: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'tour needs imageCover']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      trim: Date.now()
    },
    startDates: [Date],
    startLocation: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number
      }
    ],
    secretTour: {
      type: Boolean,
      default: false
    },
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourScheme.index({ price: 1, ratingsAverage: -1 });
tourScheme.index({ slug: 1 });

tourScheme.index({ startLocation: '2dsphere' });

tourScheme.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

tourScheme.virtual('oneDayPrice').get(function() {
  return this.price / this.duration;
});

tourScheme.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
});

tourScheme.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourScheme.pre(/^find/, function(next) {
  this.start = Date.now();
  this.find({ secretTour: { $ne: true } });
  next();
});

tourScheme.pre(/^find/, function(next) {
  this.populate({
    path: 'guides',
    select: ['-__v', '-passwordResetExpires', '-recentPasswordUpdatedAt', '-passwordResetToken']
  });
  next();
});

tourScheme.post(/^find/, function(docs, next) {
  this.end = Date.now();
  console.log(`this query takes time : ${this.end - this.start}`);
  next();
});

tourScheme.pre(/^update|update$/i, function(next) {
  if (this._update.price < this._update.priceDiscount) {
    throw new AppError('discount must be under price, update Also', 400);
  }
  next();
});

tourScheme.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

  if (Object.keys(this.pipeline()[1])[0] === '$geoNear') {
    const geo = this.pipeline()[1];
    this.pipeline().splice(1, 1);
    this.pipeline().unshift(geo);
  }

  next();
});

const Tour = mongoose.model('Tour', tourScheme);

module.exports = Tour;
