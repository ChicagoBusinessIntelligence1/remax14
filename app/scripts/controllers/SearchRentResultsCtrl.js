'use strict';

angular.module('app')
  .controller('SearchRentResultsCtrl', function (homes, $scope) {

    $scope.homes = homes;
    $scope.isRent = true;
    console.log($scope.homes);

  });
