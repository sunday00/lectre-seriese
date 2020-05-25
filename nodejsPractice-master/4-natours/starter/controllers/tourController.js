const path = require('path');
const multer = require('multer');
const sharp = require('sharp');
const Controller = require('./Controller');
const Alias = require('./alias/tour');
const Aggregate = require('./aggregate/tour');
const AppError = require('../helpers/BasicError');

module.exports = class TourController extends Controller {
  constructor(model) {
    super(model);
    this.alias = new Alias();
    this.aggregate = new Aggregate(model);
    this.populate = 'reviews';
  }

  alterType = async (req, res) => {
    super.index(req);
    const tours = await this.query;

    const f = async (model, id, ratingsQuantity) => {
      await model.findByIdAndUpdate(id, {
        ratingsQuantity: ratingsQuantity - 0
      });
    };

    tours.forEach(v => {
      f(this.model, v._id, v.ratingsQuantity);
    });

    res.status(200).json({ status: `success` });
  };

  withIn = async (req, res, next) => {
    const { distance, latlng, unit } = req.params || req.queryString || req.body;
    const [lat, lng] = latlng.split(',');

    // this is km and mile ratio for earth.
    const radius = unit.toLowerCase() === 'mi' ? distance / 3963.2 : distance / 6378.1;

    if (!lng || !lat) {
      return next(new AppError('latlng should be passed into "lat,lng" format', 400));
    }

    const tours = await this.model.find({
      startLocation: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius]
        }
      }
    });

    this.response(res, 200, { length: tours.length, tours });
  };

  distance = async (req, res, next) => {
    const { latlng, unit } = req.params || req.queryString || req.body;
    const [lat, lng] = latlng.split(',');

    if (!lng || !lat) {
      return next(new AppError('latlng should be passed into "lat,lng" format', 400));
    }

    const distances = await this.model.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [lng - 1, lat - 1]
          },
          distanceField: 'distance',
          distanceMultiplier: unit === 'mi' ? 0.000621371 : 0.001
        }
      },
      {
        $project: {
          distance: 1,
          name: 1
        }
      }
    ]);

    this.response(res, 200, { distances });
  };

  resizeImage = this.catcher(async (req, res, next) => {
    if (!req.files.imageCover || !req.files.images) return next();

    req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpg`;

    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(path.join(__dirname, `../public/img/tours/${req.body.imageCover}`));

    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (v, i) => {
        const imagesFileName = `tour-${req.params.id}-${Date.now()}-${i - 0 + 1}.jpg`;
        await sharp(v.buffer)
          .resize(2000, 1333)
          .toFormat('jpeg')
          .jpeg({ quality: 100 })
          .toFile(path.join(__dirname, `../public/img/tours/${imagesFileName}`));
        req.body.images.push(imagesFileName);
      })
    );

    next();
  });

  upload = multer({
    storage: this.multerStorage,
    filter: this.multerFilter
  }).fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 3 }
  ]);
};
