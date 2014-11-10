'use strict';

angular.module('app')
  .directive('svInputTxt', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-input-txt.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
