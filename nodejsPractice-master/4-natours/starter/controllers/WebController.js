const AppError = require('../helpers/WebError');

module.exports = class {
  constructor(model) {
    this.model = model;
    this.query = {};
    this.populate = null;
    this.populateFields = null;
  }

  catcher = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };

  render(res, statusCode, view, data) {
    return res.status(statusCode).render(view, data);
  }

  index = this.catcher(async (req, res, next) => {
    const data = await this.model.find();
    this.render(res, 200, 'overview', {
      title: 'all tours',
      data
    });
  });

  show = this.catcher(async (req, res, next) => {
    const tour = await this.model.findOne({ slug: req.params.slug }).populate({
      path: this.populate,
      fields: this.populateFields
    });

    if (!tour) {
      return new AppError(res, 'The tour that has the name is not found', 404);
    }

    this.render(res, 200, 'tour', {
      title: tour.name,
      tour: tour
    });
  });
};
