const path = require('path');
const multer = require('multer');

const AppError = require('../helpers/BasicError');
const ObjHelper = require('../helpers/ObjectHelper');

module.exports = class {
  constructor(model) {
    this.model = model;
    this.query = {};
    this.populate = null;
  }

  catcher = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };

  request(req) {
    this.req = req;
    return req;
  }

  response(res, statusCode, data, status = 'success') {
    return res.status(statusCode).json({
      status: status,
      ...data
    });
  }

  filter(req) {
    this.request(req);
    const _query = { ...this.req.query };
    const excludeField = ['page', 'sort', 'limit', 'fields'];
    excludeField.forEach(v => delete _query[v]);

    const query = JSON.stringify(_query);
    this.query = this.model.find(JSON.parse(query.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`)));
    return this;
  }

  sort() {
    if (this.req.query.sort) {
      this.query = this.query.sort(this.req.query.sort.split(',').join(' '));
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  pluckViaReq() {
    if (this.req.query.fields) {
      this.query = this.query.select(this.req.query.fields.split(',').join(' '));
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    let { limit, page } = this.req.query;
    limit = limit - 0 || 10;
    page = page - 0 || 1;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }

  indexOrganizer(req) {
    this.filter(req)
      .sort()
      .pluckViaReq()
      .paginate();
  }

  index = this.catcher(async (req, res) => {
    this.indexOrganizer(req);
    // if (this.populate) this.query = this.query.populate(this.populate);
    // const docs = await this.query.explain();
    const docs = await this.query;

    this.response(res, 200, { requestedAt: req.requestTime, result: docs.length, docs });
  });

  show = this.catcher(async (req, res, next) => {
    let query;
    if (typeof this.select === 'function') {
      query = this.model.find(this.select(req));
    } else {
      query = this.model.findById(req.params.id || req.body.id || req.queryString.id);
    }

    if (this.populate) query = query.populate(this.populate);
    let doc;

    try {
      doc = await query;
    } catch (err) {
      if (err.name === 'CastError' && process.env.NODE_ENV === 'development') {
        return next(
          new AppError(
            `Maybe router order is wrong. the /:params must be below /string router. see detail${err.message}`,
            500
          )
        );
      }
    }

    if (!doc) return next(new AppError('Not Found', 404));

    this.response(res, 200, { doc });
  });

  store = this.catcher(async (req, res) => {
    const doc = await this.model.create(req.body);
    this.response(res, 201, { doc });
  });

  update = this.catcher(async (req, res, next) => {
    const serial = ObjHelper.getSerial(req);
    const doc = await this.model.findByIdAndUpdate(serial, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) return next(new AppError('Not Found', 404));

    this.response(res, 200, { doc });
  });

  delete = this.catcher(async (req, res, next) => {
    if (req.params.rid || req.body.rid || req.queryString.rid) {
      req.params.id = req.params.rid || req.body.rid || req.queryString.rid;
    }
    const doc = await this.model.findByIdAndDelete(req.params.id || req.body.id || req.queryString.id);
    if (!doc) return next(new AppError('Not Found', 404));

    this.response(res, 204, { message: 'done' });
  });

  // multerStorage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, path.join(__dirname, '../public/img/users'));
  //   },
  //   filename: (req, file, cb) => {
  //     const ext = file.mimetype.split('/')[1];
  //     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  //   }
  // });

  multerStorage = multer.memoryStorage();

  multerFilter = (req, file, cb) => {
    if(file.mimetype.startWith('image')){
      cb(null, true);
    } else {
      cb(new AppError(`no image isn't not supported yet`, 400), false);
    }
  };

};
