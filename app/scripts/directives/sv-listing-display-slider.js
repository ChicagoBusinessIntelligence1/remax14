'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
      scope: {
        house: '=',
        title: '@',
        description: '@',
        info: '=',
        updateHouse: '&'
      },
      link: function ($scope, element, attr) {
        $scope.isEdit = true;
        $scope.area = {};


        $scope.editListing = function () {
          $scope.isEdit = true;
        };



        if ($scope.title === '1_generalInformation' || $scope.title === '2_propertyDescription') {
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
