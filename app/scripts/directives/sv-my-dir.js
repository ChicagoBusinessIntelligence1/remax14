'use strict';

angular.module('app')
  .directive('svMyDir', function () {
    return {
      templateUrl: '../views/directives/sv-my-dir.html',
      restrict: 'E'
    };
  });
