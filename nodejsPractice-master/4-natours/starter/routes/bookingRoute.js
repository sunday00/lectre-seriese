const express = require('express');
const BookingController = require('../controllers/bookingController');
const AuthController = require('../controllers/authController');
const Booking = require('../models/Booking');
const Tour = require('../models/Tour');
const User = require('../models/User');

const bookingController = new BookingController(Booking, Tour);
const authController = new AuthController(User);

const router = express.Router();

router.use(authController.protect);

// web
router.route(`/check-session/:id`).get(bookingController.getCheckoutSession);
router.route(`/success/:tour/:user/:price`).get(bookingController.successBook);

module.exports = router;
