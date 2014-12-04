'use strict';

angular.module('app')
  .directive('svOneStopList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-one-stop-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
