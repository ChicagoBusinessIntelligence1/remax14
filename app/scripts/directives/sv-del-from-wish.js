'use strict';

angular.module('app')
  .directive('svDelFromWish', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-del-from-wish.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
