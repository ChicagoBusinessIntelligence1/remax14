'use strict';

angular.module('app')
  .directive('svNewField', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '',
      link: function ($scope, element, attr) {

        $scope.features = [
          {
            "value": "txt",
            "label": "<i class=\"fa fa-square-o\"></i> Text Field"
          },
          {
            "value": "area",
            "label": "<i class=\"fa fa-tablet\"></i> Text Area"
          },
          {
            "value": "chbx",
            "label": "<i class=\"fa fa-toggle-on\"></i> Checkbox"
          }
        ];
      }
    };
  });
