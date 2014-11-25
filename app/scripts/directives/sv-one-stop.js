'use strict';

angular.module('app')
  .directive('svOneStop', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-one-stop.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
