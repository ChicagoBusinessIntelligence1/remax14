'use strict';

angular.module('app')
  .directive('svListingDisplaySlider', function ($filter, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-display-slider.html',
      scope: {
        houseRepo: '@',
        house: '=',
        isTemplate: '=',
        index: '@',
        title: '@',
        updateHouse: '&'
      },
      link: function ($scope, element, attr) {
        var repo = $scope.houseRepo + '/' + $scope.title;
        $scope.section = $firebase(new Firebase(repo)).$asArray();
        $scope.section.$loaded(function () {

          $scope.isSingleProp = $scope.section.length;
        })
        $scope.isEdit = false;
        $scope.area = {};

        $scope.saveSection = function () {
          $scope.updateHouse({sectionIndex: $scope.index, sectionContent: $scope.house[$scope.index]});
          $scope.isEdit = false;
        };

        /*Show button for adding properties only on some sections*/
        var showAddProperty = ['appliances', 'other rooms', 'property features', 'exterior and lot features'];
        //converting our current title('@') to title name lower case
        var sectionName = ($filter('keyConversion')($scope.title)).toLowerCase();
        // search
        var showButton = showAddProperty.indexOf(sectionName);
        if (showButton === -1) {
          $scope.isButtonShown = false;
        }
        else {
          $scope.isButtonShown = true;
        }

        /*If there is only one property on section*/

        $scope.editListing = function () {
          $scope.isEdit = true;
        };

        $scope.cancelEditListing = function () {
          $scope.isEdit = false;
        };
        /*General Information and Property Description Sections are vis. by default*/

        //if ($scope.title === 'generalInformation' || $scope.title === 'propertyDescription') {
        //  $scope.isVisible = true;
        //} else {
        //  $scope.isVisible = false;
        //}
        $scope.isVisible = true;
        $scope.toggleShow = function () {
          $scope.isVisible = !$scope.isVisible;
        };
      }
    };
  });
