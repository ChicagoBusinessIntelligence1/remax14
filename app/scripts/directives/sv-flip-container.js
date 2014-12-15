'use strict';

angular.module('app')
  .directive('svFlipContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {},

      controller: function ($scope) {
        this.changeSplitDisplay = function (bothShown,width, height) {
          $scope.bothShown = bothShown;
          $scope.w = width;
          $scope.h = height/5;
        };

      },
      link: function ($scope, element, attr) {
        $scope.isRent = false;


      }
    };
  });
