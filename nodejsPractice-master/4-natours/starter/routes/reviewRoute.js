const express = require('express');

const ReviewController = require('../controllers/reviewController');
const Review = require('../models/Review');

const AuthController = require('../controllers/authController');
const User = require('../models/User');

const reviewController = new ReviewController(Review);
const authController = new AuthController(User);

const router = express.Router({ mergeParams: true });

// noinspection JSUnresolvedFunction
router
  .route(`/`)
  .get(reviewController.index)
  .post(authController.protect, authController.restrict('user'), reviewController.preStore, reviewController.store);

// noinspection JSUnresolvedFunction
router
  .route(`/:rid`)
  .get(reviewController.show)
  .patch(authController.protect, authController.restrict('user', 'admin'), reviewController.update)
  .delete(authController.protect, authController.restrict('user', 'admin'), reviewController.delete);

module.exports = router;
