'use strict';

angular.module('app')
  .directive('svSaleType', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-sale-type.html',
      scope: {
        house: '='
      },
      link: function ($scope, element, attr) {

      }
    };
  });
