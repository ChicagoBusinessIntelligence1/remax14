'use strict';

angular.module('app')
  .directive('svRentDisplaySlider', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-rent-display-slider.html',
      scope: {
      },
      link: function ($scope, element, attr) {
      }
    };
  });
