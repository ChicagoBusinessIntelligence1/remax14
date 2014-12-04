'use strict';

angular.module('app')
  .directive('svHeader', function () {
    return {
      templateUrl: '../views/directives/sv-header.html',
      restrict: 'E'
    };
  });
