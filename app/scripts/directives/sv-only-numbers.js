'use strict';

angular.module('app')
  .directive('svOnlyNumbers', function () {
    return {
      link: function ($scope, element, attrs) {
        $scope.$watch('model.value', function (newValue, oldValue) {
          if (_.isUndefined(newValue)) {
            $scope.model.value = oldValue;
          }
        });
      }
    };
  });
