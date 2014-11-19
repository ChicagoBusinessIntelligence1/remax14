'use strict';

angular.module('app')
  .controller('SveticCtrl', function ($scope) {
    $scope.grid ={
      dimensions:[2,1]
    };
    $scope.flex ={
      ratio:[2,1],
      transition:true
    };
  });
