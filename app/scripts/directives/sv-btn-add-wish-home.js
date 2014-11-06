'use strict';

angular.module('app')
  .directive('svBtnAddWishHome', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-btn-add-wish-home.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
