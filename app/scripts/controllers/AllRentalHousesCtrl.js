'use strict';

angular.module('app')
  .controller('AllRentalHousesCtrl', function (homes, $scope) {
    $scope.homes = homes;
    $scope.isRent = true;
  });
