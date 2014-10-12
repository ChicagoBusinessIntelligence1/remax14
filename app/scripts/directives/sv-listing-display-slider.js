'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function ($filter) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
      scope: {
        house: '=',
        title: '@',
        description: '@',
        open: '=',
        updateHouse: '&'
      },
      link: function ($scope, element, attr) {
        $scope.isEdit = false;
        $scope.area = {};

        $scope.save = function () {
          $scope.updateHouse($scope.house);
        };
        $scope.isSingleProp = _.keys($scope.house[$scope.title]).length;

        $scope.editListing = function () {

          $scope.isVisible = !$scope.isVisible;
          $scope.isEdit = true;
        };

        $scope.cancelEditListing = function () {
          $scope.isVisible = !$scope.isVisible;
          $scope.isEdit = false;
        };

        if ($scope.title === '01_generalInformation' || $scope.title === '02_propertyDescription') {
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
