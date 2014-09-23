'use strict';

angular.module('app')
  .directive('svNewDir', function () {
    return {
      templateUrl: '../views/directives/sv-new-dir.html',
      restrict: 'E'
    };
  });
