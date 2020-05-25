const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Controller = require('./Controller');
const AppError = require('../helpers/WebError');

module.exports = class ViewController extends Controller {
  constructor(model, tour) {
    super(model);
    this.tour = tour;
  }

  getCheckoutSession = this.catcher(async (req, res, next) => {
    const tour = await this.tour.findById(req.params.id);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      // success_url: `${req.protocol}://${req.get('host')}/`,
      success_url: `${req.protocol}://${req.get('host')}/api/v1/bookings/success/${tour.id}/${req.user.id}/${tour.price}`,
      cancel_url: `${req.protocol}://${req.get('host')}/tours/${tour.slug}`,
      customer_email: req.user.email,
      client_reference_id: req.params.id,
      line_items: [
        {
          name: `${tour.name} Tour`,
          description: tour.summary,
          // images: [`${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`], // localhost, crossdomain image not works
          images: [`https://files.stripe.com/files/f_test_qbQTMNpYluimfZLbDkBF8wZv`],
          amount: tour.price * 100,
          currency: 'usd',
          quantity: 1
        }
      ]
    });

    this.response(res, 200, { session });
  });

  successBook = this.catcher(async (req, res, next) => {
    const { tour, user, price } = req.params;
    if (!tour || !user || !price) {
      return next(new AppError('tour, user, price needed', 400));
    }

    await this.model.create({ tour, user, price });

    return res.redirect('/');
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
