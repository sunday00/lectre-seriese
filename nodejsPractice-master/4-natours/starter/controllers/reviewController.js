const Controller = require('./Controller');
const Alias = require('./alias/tour');
const AppError = require('../helpers/BasicError');

module.exports = class ReviewController extends Controller {
  constructor(model) {
    super(model);
    this.alias = new Alias();
    // this.aggregate = new Aggregate(model);
  }

  preStore = (req, res, next) => {
    req.body = {
      ...req.body,
      tour: req.body.tour || req.params.id,
      user: req.user.id
    };
    next();
  };

  select = req => {
    return {
      tour: req.body.tour || req.params.id,
      _id: req.params.rid
    };
  };

};
