'use strict';

angular.module('app')
  .directive('svInputTxt', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-input-txt.html',
      scope: {
        inputName: '@',
        inputType: '@',
        inputModel:'=',
        labelClass:'@',
        inputClass:'@',
        fieldClass:'@',
        isRequired:'=',
        form: '='
      },
      link: function ($scope, element, attr) {
        $scope.label =_.str.humanize($scope.inputName);
      }
    };
  });
