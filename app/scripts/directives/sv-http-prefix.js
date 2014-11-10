'use strict';

angular.module('app')
  .directive('svHttpPrefix', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-http-prefix.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
