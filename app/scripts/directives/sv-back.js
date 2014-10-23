'use strict';

angular.module('app')
  .directive('svBack', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-back.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
