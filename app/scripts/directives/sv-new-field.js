'use strict';

angular.module('app')
  .directive('svNewField', function ($select) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-sm" ng-model="selectedType" data-html="1" placeholder="Field Type" ng-options="feature.value as feature.label for feature in features" bs-select>Field Type <span class="caret"></span></button>',
      link: function ($scope, element, attr) {

        $scope.selectedType = "";
        $scope.features = [{"value":"txt","label":"<i class=\"fa fa-square-o\"></i> Text Field"},{"value":"area","label":"<i class=\"fa fa-tablet\"></i> Text Area"},{"value":"chbx","label":"<i class=\"fa fa-toggle-on\"></i> Checkbox"}];
      }
    };
  });
