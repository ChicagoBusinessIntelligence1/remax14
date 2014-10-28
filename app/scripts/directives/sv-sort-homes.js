'use strict';

angular.module('app')
  .directive('svSortHomes', function (sortTypes) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-sort-homes.html',
      scope: {
        sortBy: '='
      },
      link: function ($scope, element, attr) {
        $scope.sortTypes = sortTypes;
      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
