'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
      scope: {
        title: '@',
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
