'use strict';

angular.module('app')
  .directive('svHomeInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-info.html',
      link: function ($scope, element, attr) {
      }
    };
  });
