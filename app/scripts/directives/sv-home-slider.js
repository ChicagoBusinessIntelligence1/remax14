'use strict';

angular.module('app')
  .directive('svHomeSlider', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-slider.html',
      scope: {
        title: '@',
        map: '=',
        description:'@',
        info:'=',
        isShown:'='
      },
      link: function ($scope, element, attr) {

      }
    };
  });
