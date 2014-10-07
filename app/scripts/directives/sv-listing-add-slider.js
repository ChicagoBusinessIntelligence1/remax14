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
        open: '='
      },
      link: function ($scope, element, attr, cltrls, transclude) {
        $scope.isSaveDisabled = true;

        transclude($scope, function(clone, scope) {
          scope=$scope;
        });

        $scope.$watch('form.$valid', function (validity) {
          if (validity) {
            $scope.isSaveDisabled = false;
          } else {
            $scope.isSaveDisabled = true;
          }
        });

        if ($scope.open) {
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
