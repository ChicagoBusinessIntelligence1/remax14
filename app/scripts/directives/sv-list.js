'use strict';

angular.module('app')
  .directive('svList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
