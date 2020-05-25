const AppError = require('../helpers/WebError');

module.exports = (err, req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();

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
      stack: err.stack,
      statusCode: 500
    };
  } else if (process.env.NODE_ENV === 'production') {
    errObj = { ...err };

    if (errObj.isOperational !== true) {
      errObj.statusCode = 500;
      errObj.status = 'error';
      errObj.message = 'Uncaught Error';
    }
  }
  console.log('🧨💥err', err);
  return new AppError(res, errObj.message, errObj.statusCode);
};
