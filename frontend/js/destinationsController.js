'use strict';

angular.module('Destinations')
  .controller('DestinationsController', DestinationsController);

DestinationsController.$inject = ['$http'];

function DestinationsController($http){
  let self = this;
  self.all = [];
  self.addDestination = addDestination;
  self.newDestination = {};
  self.getDestinations = getDestinations;
  self.deleteDestination = deleteDestination;

  //refreshes destinations list
  getDestinations();

  function getDestinations(){
    $http
      .get('http://localhost:3000/destinations')
      .then(function(res){
        self.all = res.data.destinations;
      });
    }

    function addDestination(){
    $http
      .post('http://localhost:3000/destinations', self.newDestination)
      .then(function(res){
        getDestinations();
      });
      // empties new criminal object
      self.newDestination= {};
    }

    function deleteDestination(destination){
      $http
        .delete("http://localhost:3000/destinations/" + destination._id)
        .then(function(res){
          let index = self.all.indexOf(destination);
          self.all.splice(index, 1);
        });
    }

}
