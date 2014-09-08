'use strict';

angular.module('app')
  .directive('#jname#', function () {
    return {
      templateUrl: '../views/directives/#dname#.html',
      restrict: 'E'
    };
  });
