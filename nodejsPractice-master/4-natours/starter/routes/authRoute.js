const express = require('express');

const AuthController = require('../controllers/authController');
const User = require('../models/User');

const authController = new AuthController(User);

const router = express.Router();

// noinspection JSUnresolvedFunction
router.route(`/sign-up`).post(authController.store);

// noinspection JSUnresolvedFunction
router.route(`/sign-in`).post(authController.login);

// noinspection JSUnresolvedFunction
router.route(`/forgot-password`).post(authController.forgotPassword);

// noinspection JSUnresolvedFunction
router.route(`/reset-password/:token`).patch(authController.resetPassword);

// noinspection JSUnresolvedFunction
router.use(authController.protect);

// noinspection JSUnresolvedFunction
router.route(`/reset-password`).patch(authController.updatePassword);

// noinspection JSUnresolvedFunction
router.route(`/logout`).get(authController.logout);

// noinspection JSUnresolvedFunction
router.use(authController.restrict('admin'));

// noinspection JSUnresolvedFunction
router.route(`/update/:id`).patch(authController.update);

module.exports = router;
