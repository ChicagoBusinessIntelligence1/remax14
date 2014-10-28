'use strict';

angular.module('app')
  .directive('svSortHomes', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-sort-homes.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
