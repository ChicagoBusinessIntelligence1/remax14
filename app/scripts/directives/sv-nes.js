'use strict';

angular.module('app')
  .directive('svNes', function () {
    return {
      templateUrl: '../views/directives/sv-nes.html',
      restrict: 'E'
    };
  });
