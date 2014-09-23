'use strict';

angular.module('app')
  .directive('svTestM', function () {
    return {
      templateUrl: '../views/directives/sv-test-m.html',
      restrict: 'E'
    };
  });
