'use strict';

angular.module('app')
  .directive('svHomeRentHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-rent-header.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
