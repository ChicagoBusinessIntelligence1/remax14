'use strict';

angular.module('app')
  .directive('svRentalDisplaySlider', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-rental-display-slider.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
