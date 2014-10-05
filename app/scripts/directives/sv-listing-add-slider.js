'use strict';

angular.module('app')
  .directive('svListingAddSlider', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-add-slider.html',
      transclude: true,
      replace: true,
      scope: {
        title: '@'
      },
      link: function ($scope, element, attr) {
        $scope.isVisible = true;

        $scope.toggleShow = function () {

          $scope.isVisible = !$scope.isVisible;
        };
      }
    };
  });
