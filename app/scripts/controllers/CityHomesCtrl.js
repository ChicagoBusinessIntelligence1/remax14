'use strict';

angular.module('app')
  .controller('CityHomesCtrl', function ($scope, $stateParams, SearchService) {
    var city = $stateParams.city;
    console.time('test1');
    SearchService.findByCity(city).then(function (homes) {
      $scope.homes = homes;
      console.timeEnd('test1');
    })
  });
