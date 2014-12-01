'use strict';

angular.module('app')
  .controller('CityHomesCtrl', function ($scope, $stateParams, SearchService) {
    var city = $stateParams.city;
    SearchService.findByCity(city).then(function (homes) {
      $scope.homes = homes;
    })
  });
