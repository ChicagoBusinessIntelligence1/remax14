'use strict';

angular.module('app')
  .controller('SingleFamilyHomesCtrl', function (homes,$scope) {
    $scope.homes = homes;
  });
