'use strict';

let Destination = require('../models/Destination');

// GET
function getAll(req, res) {
  Destination.find(function(err, destinations){
    if (err) throw err;

    res.json({destinations: destinations});
  }).select('-__v')
 }

// POST
function createDestination(req, res) {
  let destination = new Destination(req.body);

  destination.save(function(err) {
    if (err) throw err;

    res.json({destination: destination})
  });
}

// GET
function getDestination(req, res) {
  let id = request.params.id;

  Criminal.findById({_id: id}, function(err, destination) {
    if(err) throw err;

    response.json({destination: destination});
  }).select('-__v');
}

function updateDestination(req, res) {
  let id = request.params.id;

  Destination.findById({_id: id}, function(err, destination) {
    if(req.body.city_name) destination.city_name = req.body.city_name;
    if(req.body.country_name) destination.country_name = req.body.country_name;

  destination.save(function(err){
    if(err) throw err;

    res.json({message: "Destination updated", destination: destination});

    })
  }).select('-__v');
}

function removeDestination(req, res){
  let id = req.params.id;

  Destination.remove({_id: id}, function(err){
    if (err) throw err;

    res.json({message: "destination deleted"})
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createDestination: createDestination,
  getDestination: getDestination,
  updateDestination: getDestination,
  removeDestination: removeDestination
}
