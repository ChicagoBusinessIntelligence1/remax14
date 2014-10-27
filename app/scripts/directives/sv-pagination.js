'use strict';

angular.module('app')
  .directive('svPagination', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-pagination.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
