'use strict';

angular.module('app')
  .directive('svOctagon', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-octagon.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
