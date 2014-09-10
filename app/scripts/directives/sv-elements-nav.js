'use strict';

angular.module('app')
  .directive('svElementsNav', function () {
    return {
      templateUrl: '../views/directives/sv-elements-nav.html',
      restrict: 'E'
    };
  });
