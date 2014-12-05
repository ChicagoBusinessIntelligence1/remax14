'use strict';

angular.module('app')
  .directive('svHomePanel', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {

      }
    };
  });
