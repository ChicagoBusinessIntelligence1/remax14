'use strict';

angular.module('app')
  .directive('svFlipContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {},

      controller: function ($scope) {
        this.changeSplitDisplay = function (bothShown) {
          $scope.bothShown = bothShown;
        };

      },
      link: function ($scope, element, attr) {



      }
    };
  });
