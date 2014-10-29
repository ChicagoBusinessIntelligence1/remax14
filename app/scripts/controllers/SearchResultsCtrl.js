'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (homes, $scope) {
    $scope.sortBy = {
      val: 'date'
    };

    $scope.homes = homes;

  });

