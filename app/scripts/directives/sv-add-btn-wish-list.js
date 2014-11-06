'use strict';

angular.module('app')
  .directive('svAddBtnWishList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-btn-wish-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
