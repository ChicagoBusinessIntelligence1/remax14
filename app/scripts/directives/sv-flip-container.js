'use strict';

angular.module('app')
  .directive('svFlipContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {},
      controller: function ($scope) {
        /*method that accepts computed params width and height from sv-home-panel and
         * depending on bool var bothShown, defines whether to show switcher for sale/rent */
        this.changeSplitDisplay = function (bothShown, width, height) {
          $scope.bothShown = bothShown;
          $scope.w = width;
          $scope.h = height / 5;
        };
      },
      link: function ($scope, element, attr) {
        /*initial value for loading directive*/
        $scope.isRent = false;
      }
    };
  });
