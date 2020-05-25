const express = require('express');

const TourController = require('../controllers/tourController');
const Tour = require('../models/Tour');

const AuthController = require('../controllers/authController');
const User = require('../models/User');

const tourController = new TourController(Tour);
const authController = new AuthController(User);

const reviewRouter = require('./reviewRoute');

const router = express.Router();

// noinspection JSUnresolvedFunction
router
  .route(`/`)
  .get(authController.protect, tourController.index)
  .post(authController.protect, authController.restrict('admin', 'lead-guide'), tourController.store);

// noinspection JSUnresolvedFunction
router.route(`/top-5-cheap`).get(tourController.alias.top5cheap, tourController.index);

// noinspection JSUnresolvedFunction
router.route(`/stats`).get(tourController.aggregate.getTourStats);

// noinspection JSUnresolvedFunction
router
  .route(`/monthly-plan/:year`)
  .get(
    authController.protect,
    authController.restrict('admin', 'lead-guide', 'guide'),
    tourController.aggregate.getMonthlyPlan
  );

// noinspection JSUnresolvedFunction
router.route(`/within/:distance/center/:latlng/unit/:unit`).get(tourController.withIn);
// noinspection JSUnresolvedFunction
router.route(`/distance/:latlng/unit/:unit`).get(tourController.distance);

// noinspection JSUnresolvedFunction
router.route(`/alter-type`).get(tourController.alterType);

// noinspection JSUnresolvedFunction
router.use(`/reviews`, reviewRouter);

// noinspection JSUnresolvedFunction
router
  .route(`/:id`)
  .get(tourController.show)
  .patch(authController.protect, authController.restrict('admin', 'lead-guide'), tourController.upload, tourController.resizeImage, tourController.update)
  .delete(authController.protect, authController.restrict('admin', 'lead-guide'), tourController.delete);

// noinspection JSUnresolvedFunction
router.use(`/:id/reviews`, reviewRouter);

module.exports = router;
