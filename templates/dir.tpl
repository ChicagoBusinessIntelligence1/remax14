'use strict';

angular.module('app')
  .directive('#jname#', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/#dname#.html',
      scope:{},
      link: function postLink($scope, element, attrs) {

      }
    };
  });
