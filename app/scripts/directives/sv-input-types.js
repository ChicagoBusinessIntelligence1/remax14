'use strict';

angular.module('app')
  .directive('svInputTypes', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-input-types.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
