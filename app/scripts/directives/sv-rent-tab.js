'use strict';

angular.module('app')
  .directive('svRentTab', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-rent-tab.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      }
    };
  });
