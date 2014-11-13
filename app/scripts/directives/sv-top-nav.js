'use strict';

angular.module('app')
  .directive('svTopNav', function () {
    return {
      templateUrl: '../views/directives/sv-top-nav.html',
      replace: 'true',
      restrict: 'E',
      controller: function ($scope) {
        console.log($scope.user);
      }
    };
  });
