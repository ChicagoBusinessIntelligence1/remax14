'use strict';

angular.module('app')
  .directive('svWishList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-wish-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
