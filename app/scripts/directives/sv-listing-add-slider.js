'use strict';

angular.module('app')
  .directive('svListingAddSlider', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-add-slider.html',
      transclude: true,
      replace: true,
      scope: {
        title: '@',
        initiallyOpen: '='
      },
      link: function ($scope, element, attr) {
        $scope.isSaveDisabled = true;

        $scope.$watch('form.$valid', function (validity) {
          if (validity) {
            $scope.isSaveDisabled = false;
          } else {
            $scope.isSaveDisabled = true;
          }
        });

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
