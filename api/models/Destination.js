'use strict';

let mongoose = require('mongoose');

let DestinationSchema = mongoose.Schema({
  city_name: String,
  country_name: String
});

module.exports = mongoose.model('Destination', DestinationSchema);
