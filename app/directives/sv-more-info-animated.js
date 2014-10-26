'use strict';

angular.module('app')
  .directive('svMoreInfoAnimated', function () {
    return {
      restrict: 'E',
      replace:true,
      templateUrl: '../views/directives/sv-more-info-animated.html',

      link: function ($scope, element, attr) {
      }
    };
  });
