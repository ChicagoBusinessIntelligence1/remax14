'use strict';

angular.module('app')
  .directive('svFlipContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
