'use strict';

angular.module('app')
  .directive('svAddRoom', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-room.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
