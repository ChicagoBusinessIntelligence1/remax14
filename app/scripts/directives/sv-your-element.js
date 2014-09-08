'use strict';

angular.module('app')
  .directive('svYourElement', function () {
    return {
      templateUrl: '../views/directives/sv-your-element.html',
      restrict: 'E'
    };
  });

