'use strict';

angular.module('app')
  .controller('AllRentalHomesCtrl', function (homes, $scope) {
    $scope.homes = homes;
    $scope.isRent = true;
  });
