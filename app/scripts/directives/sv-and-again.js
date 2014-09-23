'use strict';

angular.module('app')
  .directive('svAndAgain', function () {
    return {
      templateUrl: '../views/directives/sv-and-again.html',
      restrict: 'E'
    };
  });
