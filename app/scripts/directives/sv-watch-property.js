'use strict';

angular.module('app')
  .directive('svWatchProperty', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-watch-property.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
