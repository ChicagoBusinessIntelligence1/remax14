'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
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
