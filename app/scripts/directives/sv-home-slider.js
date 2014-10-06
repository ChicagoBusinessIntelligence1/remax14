'use strict';

angular.module('app')
  .directive('svHomeSlider', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-slider.html',
      scope: {
        title: '@',
        map: '=',
        description: '@',
        info: '=',
        initiallyOpen: '='
      },
      link: function ($scope, element, attr) {
        if ($scope.initiallyOpen) {
          $scope.isVisible = true;
        } else {
          $scope.isVisible = false;
        }
        $scope.toggleShow = function () {
          $scope.isVisible = !$scope.isVisible;
        };
      }
    };
  });
