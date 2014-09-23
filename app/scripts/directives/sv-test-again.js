'use strict';

angular.module('app')
  .directive('svTestAgain', function () {
    return {
      templateUrl: '../views/directives/sv-test-again.html',
      restrict: 'E'
    };
  });
