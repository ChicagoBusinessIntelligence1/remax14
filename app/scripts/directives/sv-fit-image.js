'use strict';

angular.module('app')
  .directive('svFitImage', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-fit-image.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
