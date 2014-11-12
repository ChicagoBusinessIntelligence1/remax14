'use strict';

angular.module('app')
  .directive('svInputNumbers', function () {
    return {
      require: 'ngModel',
      link: function ($scope, element, attrs, modelCtrl) {

        modelCtrl.$parsers.push(function (inputValue) {
          if ($scope.inputType !== 'number') {
            return inputValue;
          }
          var modifiedVal = inputValue.replace(/[^0-9]/g, '');
          if (modifiedVal !== inputValue) {
          modelCtrl.$setViewValue(modifiedVal);
          modelCtrl.$render();
          }
          return modifiedVal;
        })

      }
    };
  });
