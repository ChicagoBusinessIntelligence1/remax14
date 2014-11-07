'use strict';

angular.module('app')
  .directive('svWishListHomes', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-wish-list-homes.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
