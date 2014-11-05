'use strict';

angular.module('app')
  .directive('svWatchListButtons', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-watch-list-buttons.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
