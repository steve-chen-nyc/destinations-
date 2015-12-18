'use strict';

let express = require('express'),
    router =  express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// gets all functions from controller
let destinationsController = require('../controllers/destinations');

router.route('/destinations')

  // Get all destinations
  .get(destinationsController.getAll)

  // Create a new destination
  .post(destinationsController.createDestination)

router.route('/destinations/:id')

  // Gets one destination
  .get(destinationsController.getDestination)

  // updates destination
  .put(destinationsController.updateDestination)

  // deletes destiation
  .delete(destinationsController.removeDestination)

module.exports = router;
