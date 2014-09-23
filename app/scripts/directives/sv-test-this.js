'use strict';

angular.module('app')
  .directive('svTestThis', function () {
    return {
      templateUrl: '../views/directives/sv-test-this.html',
      restrict: 'E'
    };
  });
