'use strict';

angular.module('app')
  .controller('SearchSaleResultsCtrl', function (homes, $scope) {
    $scope.sortBy = {
      val: 'date'
    };

    $scope.homes = homes;

    $scope.isRent = false;
  });

