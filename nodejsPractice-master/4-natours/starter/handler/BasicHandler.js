const AppError = require('../helpers/BasicError');

const prodHandlerByName = err => {
  // eslint-disable-next-line default-case
  switch (err.name) {
    case 'CastError':
      return new AppError(`Invalid ${err.path} : ${err.value}.`, 400);
    case 'MongoError':
      if (err.code === 11000) return new AppError('The name is already taken', 400);
      return new AppError(err.message, 400);
    case 'ValidationError':
      return new AppError(
        `Invalid : ${Object.values(err.errors)
          .map(v => v.message)
          .join('. ')}.`,
        400
      );
    case 'JsonWebTokenError':
    case 'TokenExpiredError':
      return new AppError('Token is invalid.', 401);
    default:
      return err;
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let errObj = {
    statusCode: err.statusCode,
    status: err.status,
    message: err.message
  };

  if (process.env.NODE_ENV === 'development') {
    errObj = {
      ...errObj,
      error: err,
      stack: err.stack
    };
  } else if (process.env.NODE_ENV === 'production') {
    console.log('🧨💥err', err);

    errObj = { ...err };
    errObj = prodHandlerByName(errObj);

    if (errObj.isOperational !== true) {
      errObj.statusCode = 500;
      errObj.status = 'error';
      errObj.message = 'something is wrong';
    }
  }

  res.status(errObj.statusCode).json(errObj);
};
