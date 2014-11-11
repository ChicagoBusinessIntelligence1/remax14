'use strict';

angular.module('app')
  .directive('svInputNumbers', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-input-numbers.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
