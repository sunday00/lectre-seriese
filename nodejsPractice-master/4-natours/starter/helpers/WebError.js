module.exports = class WebError extends Error {
  constructor(res, message = 'SomeThing is wrong', statusCode = 500) {
    super();
    return res.status(statusCode).render('error', { title: 'Uh oh...', statusCode, message });
  }
};
