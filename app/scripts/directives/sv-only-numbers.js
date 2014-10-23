'use strict';

angular.module('app')
  .directive('svOnlyNumbers', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-only-numbers.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
