'use strict';

angular.module('app')
  .directive('svAddHomeRent', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-home-rent.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      }
    };
  });
