'use strict';

angular.module('app')
  .directive('svAddFeature', function (HideAreaService, $filter, inputTypes) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-feature.html',
      scope: {
        home: '=',
        title: '@',
        saveSection: '&'
      },
      link: function ($scope, element, attr) {
        //Hiding Text Area for Adding on Section
        var hiddenAreaInSections = ['Appliances'];
        // search

        $scope.isAreaHidden = HideAreaService.hideArea(hiddenAreaInSections, $scope.title);
        $scope.features = inputTypes;

        /*creating an obj that has empty prop "val" (Property Name)*/
        $scope.newFieldName = {val: ''};

        $scope.showAddFields = function () {
          $scope.isStateAdded = true;
        };

        /*add new prop to database and save it*/
        $scope.addNewField = function () {
          /*take a prop input type and prop name given by user*/
          var type = $scope.selectedType;
          var name = $scope.newFieldName.val;
          var initialInput = name;

          /*convert to snake case then camelize*/
          var input = _.str.camelize(name.replace(' ', '-'));
          /*convert first letter to lower case and CONCATINATE TO THE REST OF THE PROP NAME*/
          name = input[0].toLowerCase() + input.substr(1);

          /*defining a num of our new prop by counting all elements + 1*/
          var count = Object.keys($scope.home[$scope.title]).length + 1;

          /*defining whether we need to add 0 in the beginning (num of digits that length contains)
           * THEN add 0 or just convert to string*/
          var prefix = count.toString().length === 1 ? '0' + count.toString() : count.toString();
          name = prefix + '_' + name;

          /*provide a default value for automatic saving to DB*/
          var defaultValue = (type === 'chbx') ? true : initialInput + ' description';

          /*adding created prop to home section [locally on snapshot] then saving to DB*/
          $scope.home[$scope.title][name] = {type: type, value: defaultValue};
          $scope.saveSection();
          /*clear our form*/
          $scope.selectedType = '';
          $scope.newFieldName = {val: ''};
        };
        $scope.cancelNewField = function () {
          $scope.isStateAdded = false;
        };
      }
    };
  });
