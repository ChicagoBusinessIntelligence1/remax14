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
        inputModel2:'=',
        labelClass:'@',
        inputClass:'@',
        fieldClass:'@',
        isRequired:'='
      },
      link: function ($scope, element, attr) {
        $scope.restictPattern= /^\d+$/;
        $scope.label =_.str.humanize($scope.inputName);

        console.log($scope.inputModel2);
        $scope.$on('show-invalid-messages', function () {
          $scope['form_'+ $scope.inputName][$scope.inputName].$touched = true;
        })
      }
    };
  });
