const Controller = require('./WebController');
const AppError = require('../helpers/WebError');

module.exports = class ViewController extends Controller {
  constructor(model) {
    super(model);
    this.populate = 'reviews';
    this.populateFields = 'review rating user';
  }

  login = this.catcher(async (req, res) => {
    this.render(res, 200, 'login', { title: 'login' });
  });

  logout = this.catcher(async (req, res, next) => {
    res.cookie('jwt', '', { expires: new Date(Date.now()) });
    return res.redirect('/');
  });

  account = this.catcher(async (req, res, next) => {
    this.render(res, 200, 'account', { title: 'My info' });
  });

  updateAccount = this.catcher(async (req, res, next) => {
    await req.user.update({ name: req.body.name, email: req.body.email, skipPwValidate: true });
    return res.redirect('/me');
  });
};
