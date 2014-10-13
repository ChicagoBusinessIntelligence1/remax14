'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function ($filter) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
      scope: {
        house: '=',
        isTemplate: '=',
        title: '@',
        updateHouse: '&'
      },
      link: function ($scope, element, attr) {
        $scope.isEdit = false;
        $scope.area = {};

        $scope.saveSection = function () {
          $scope.updateHouse({sectionTitle: $scope.title, sectionContent: $scope.house[$scope.title]});
          $scope.isEdit = false;
        };

        /*If there is only one property on section*/
        $scope.isSingleProp = _.keys($scope.house[$scope.title]).length;

        $scope.editListing = function () {
          $scope.isEdit = true;
        };

        $scope.cancelEditListing = function () {
          $scope.isEdit = false;
        };
        /*General Information and Property Description Sections are vis. by default*/

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
