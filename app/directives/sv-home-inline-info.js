'use strict';

angular.module('app')
  .directive('svHomeInlineInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-inline-info.html',
      scope: {
        home: '='
      },
      link: function ($scope, element, attr) {
      }
    };
  });
