'use strict';

angular.module('app')
  .directive('#jname#', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/#dname#.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
