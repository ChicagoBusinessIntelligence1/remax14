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

          inputValue = inputValue.replace(/[^0-9]/g,'');
          modelCtrl.$setViewValue(inputValue);
          modelCtrl.$render();
          return inputValue;
        })

      }
    };
  });
