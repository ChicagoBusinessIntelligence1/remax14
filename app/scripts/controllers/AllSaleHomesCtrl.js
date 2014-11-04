'use strict';

angular.module('app')
  .controller('AllSaleHomesCtrl', function (homes, $scope) {
    $scope.homes = homes;
    $scope.isRent = false;
  });
