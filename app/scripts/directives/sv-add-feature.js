'use strict';

angular.module('app')
  .directive('svAddFeature', function (AddNewFieldService, HideAreaService, $filter, inputTypes) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-feature.html',
      scope: {
        section: '=',
        saveSection: '&'
      },
      link: function ($scope, element, attr) {
        //Hiding Text Area for Adding on Section
        var hiddenAreaInSections = ['Appliances'];
        // search

        $scope.isAreaHidden = HideAreaService.hideArea(hiddenAreaInSections, $scope.section.title);
        $scope.features = inputTypes;

        /*creating an obj that has empty prop "val" (Property Name)*/
        $scope.newFieldName = {val: ''};

        $scope.showAddFields = function () {
          $scope.isStateAdded = true;
        };

        /*add new prop to database and save it*/
        $scope.addNewField = function () {

          AddNewFieldService.addField($scope.section, $scope.selectedType, $scope.newFieldName.val);

          $scope.saveSection();
        };
        $scope.cancelNewField = function () {
          $scope.isStateAdded = false;
        };
      }
    };
  });
