'use strict';

angular.module('app')
  .directive('svSwitchBook', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-switch-book.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
