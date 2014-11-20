'use strict';

angular.module('app')
  .directive('svMainImage', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-main-image.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
