'use strict';

angular.module('app')
  .controller('CityHomesRentalCtrl', function ($scope, $stateParams, SearchService, urlRental) {
    var city = $stateParams.city;
    SearchService.findByCity(city, urlRental).then(function (homes) {
      $scope.homes = homes;
      console.timeEnd('test1');
    })
  });
