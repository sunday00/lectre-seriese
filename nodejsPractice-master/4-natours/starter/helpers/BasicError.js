module.exports = class BasicError extends Error {
  constructor(message = 'SomeThing is wrong', statusCode = 500) {
    super();
    this.statusCode = statusCode;
    // this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.status = statusCode >= 500 ? 'error' : 'fail';
    this.message = message;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
};
