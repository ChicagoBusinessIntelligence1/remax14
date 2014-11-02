'use strict';

angular.module('app')
  .directive('svDropDown', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-drop-down.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
