'use strict';

angular.module('app')
  .directive('svBookFire', function () {
    return {
      templateUrl: '../views/directives/sv-book-fire.html',
      restrict: 'E'
    };
  });
