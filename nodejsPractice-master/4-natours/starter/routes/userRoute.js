const express = require('express');

const UserController = require('../controllers/userController');
const AuthController = require('../controllers/authController');
const User = require('../models/User');
const Tour = require('../models/Tour');
const Booking = require('../models/Booking');

const userController = new UserController(User, Tour, Booking);
const authController = new AuthController(User);

const router = express.Router();

// noinspection JSUnresolvedFunction
router.route(`/`).get(userController.index);

router.use(authController.protect);

// noinspection JSUnresolvedFunction
router.route(`/update`).patch(userController.upload, userController.resizeImage, userController.update);

// noinspection JSUnresolvedFunction
router.route(`/delete`).delete(userController.delete);

// noinspection JSUnresolvedFunction
router.route(`/me`).get(userController.me);

// noinspection JSUnresolvedFunction
router.route(`/history`).get(userController.history);

// noinspection JSUnresolvedFunction
router.route(`/:id`).get(authController.restrict('admin'), userController.show);

module.exports = router;
