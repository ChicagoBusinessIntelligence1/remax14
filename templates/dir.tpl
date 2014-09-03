'use strict';

angular.module('app')
  .directive('#jname#', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/#dname#.html',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
