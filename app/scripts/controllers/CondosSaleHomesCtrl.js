'use strict';

angular.module('app')
  .controller('CondosSaleHomesCtrl', function (homes, $scope) {
    $scope.homes = homes;
  });
