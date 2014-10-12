'use strict';

angular.module('app')
  .directive('svAddFeature', function ($filter) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-feature.html',
      scope: {
        house: '=',
        title: '@'
      },

      link: function ($scope, element, attr) {
        var hideAreaIn = ['appliances'];
        var sectionName = ($filter('keyConversion')($scope.title)).toLowerCase();

        $scope.isAreaHidden = hideAreaIn.indexOf(sectionName) !== -1;

        $scope.features = [{"value": "txt", "label": "<i class=\"fa fa-square-o\"></i> Text Field"}, {
          "value": "area",
          "label": "<i class=\"fa fa-tablet\"></i> Text Area"
        }, {"value": "chbx", "label": "<i class=\"fa fa-toggle-on\"></i> Checkbox"}];

        $scope.types={};
        $scope.newFieldName = {val: ''};
        $scope.showAddFields = function () {

          $scope.isStateAdded = true;

        };
        $scope.addNewField = function () {
          var name = $scope.newFieldName.val;

          var input = _.str.camelize(name.replace(' ', '-'));
          name = input[0].toLowerCase() + input.substr(1);

          var type = $scope.selectedType;
          var houseProperty = $scope.house[$scope.title];
          var count = Object.keys(houseProperty).length + 1;
          var prefix = count.toString().length === 1 ? '0' + count.toString() : count.toString();
          name = prefix + '_' + name;

          houseProperty[name] = {type: type, value: ''};
        };
        $scope.cancelNewField = function () {
          $scope.isStateAdded = false;

        };
      }
    };
  });
