module.exports = class Aggregate {
  constructor(model) {
    this.model = model;
  }

  getTourStats = async (req, res) => {
    try {
      const stats = await this.model.aggregate([
        {
          $match: { ratingsAverage: { $gte: 4.5 } }
        },
        {
          $group: {
            _id: { $toUpper: '$difficulty' },
            numTours: { $sum: 1 },
            sumRatingsQuantity: { $sum: '$ratingsQuantity' },
            avgRating: { $avg: '$ratingsAverage' },
            avgPrice: { $avg: '$price' },
            minPrice: { $min: '$price' },
            maxPrice: { $max: '$price' }
          }
        },
        {
          $sort: { avgPrice: 1 }
        }
      ]);
      res.status(200).json({
        status: `success`,
        data: {
          stats
        }
      });
    } catch (e) {
      res.status(400).json({
        status: `fail`,
        errorsData: e
      });
    }
  };

  getMonthlyPlan = async (req, res) => {
    try {
      const plan = await this.model.aggregate([
        {
          $unwind: '$startDates'
        },
        {
          $match: {
            startDates: {
              $gte: new Date(`${req.params.year - 0}-01-01`),
              $lt: new Date(`${req.params.year - 0}-12-31`)
            }
          }
        },
        {
          $group: {
            _id: { $month: '$startDates' },
            numTours: { $sum: 1 },
            tours: { $push: '$name' }
          }
        },
        {
          $sort: {
            _id: 1
          }
        },
        {
          $addFields: { month: '$_id' }
        },
        {
          $project: { _id: 0 }
        },
        {
          $limit: 12
        }
      ]);
      res.status(200).json({
        status: `success`,
        data: {
          plan
        }
      });
    } catch (e) {
      res.status(400).json({
        status: `fail`,
        errorsData: e
      });
    }
  }
};
