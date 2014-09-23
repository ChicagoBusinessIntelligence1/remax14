'use strict';

angular.module('app')
  .directive('svTestMacro', function () {
    return {
      templateUrl: '../views/directives/sv-test-macro.html',
      restrict: 'E'
    };
  });
