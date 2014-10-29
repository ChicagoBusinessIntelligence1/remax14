'use strict';

angular.module('app')
  .directive('svHomesList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-homes-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
