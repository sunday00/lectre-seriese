// import
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const sanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./helpers/BasicError');
const AppErrorHandler = require('./handler/BasicHandler');
const WebErrorHandler = require('./handler/WebHandler');

const tourRoute = require('./routes/tourRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const reviewRoute = require('./routes/reviewRoute');

const viewRoute = require('./routes/viewRoute');
const bookingRoute = require('./routes/bookingRoute');

// app
const app = express();

//view
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '4mb' }));
app.use(cookieParser());

app.use(sanitizer());
app.use(xss());
app.use(
  hpp({
    whitelist: ['duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price']
  })
);

app.use(compression());

app.use(
  '/api',
  rateLimit({
    max: 100,
    windowMs: 1000 * 60 * 60,
    message: new AppError(`too many request. try again in 1 hour`, 429)
  })
);

//// route

//web
app.use(express.static(path.join(__dirname, '/public')));
app.use(`/`, viewRoute);
// app.use(`/booking`, bookingRoute);

app.use(WebErrorHandler);

// api
app.use(`/api/v1/tours`, tourRoute);
app.use(`/api/v1/auth`, authRoute);
app.use(`/api/v1/user`, userRoute);
app.use(`/api/v1/review`, reviewRoute);
app.use(`/api/v1/bookings`, bookingRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Not Found`, 404));
});

app.use(AppErrorHandler);

// server
module.exports = app;
