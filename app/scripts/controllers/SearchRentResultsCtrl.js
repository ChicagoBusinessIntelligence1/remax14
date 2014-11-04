'use strict';

angular.module('app')
  .controller('SearchRentResultsCtrl', function (homes, $scope) {

    $scope.homes = homes;
    console.log($scope.homes);

  });
