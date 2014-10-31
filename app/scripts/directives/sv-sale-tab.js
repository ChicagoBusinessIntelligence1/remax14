'use strict';

angular.module('app')
  .directive('svSaleTab', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-sale-tab.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      }
    };
  });
