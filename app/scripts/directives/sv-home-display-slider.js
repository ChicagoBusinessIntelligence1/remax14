'use strict';

angular.module('app')
  .directive('svHomeDisplaySlider', function ($filter, $firebase, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-display-slider.html',
      scope: {
        section: '=',
        isTemplate: '=',
        updateHomeSection: '&'
      },
      require: '^sv-remax-home',

      controller: function ($scope) {
        this.ngFormName = $scope.section.title + 'Form';
        $scope.ngFormName = this.ngFormName;

        $scope.user = $rootScope.user;
        var breakPoint = 1;
      },
      link: function ($scope, element, attr, svCtrl) {
        $scope.required = svCtrl.required;

        $scope.isEdit = false;
        $scope.isSingleProp = $scope.section.content ? $scope.section.content.length : 0;
        $scope.saveTest = function (mls) {
          console.log(mls);

        };
        $scope.saveSection = function () {
          $scope.updateHomeSection({section: $scope.section})
          $scope.isEdit = false;
        };
        /*Show button for adding properties only on some sections*/
        var showAddProperty = ['appliances', 'other rooms', 'property features', 'exterior and lot features'];
        //converting our current title('@') to title name lower case
        // search
        var showButton = showAddProperty.indexOf($scope.section.title);
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

        if ($scope.section.title === 'generalInformation' || $scope.section.title === 'propertyDescription') {
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
