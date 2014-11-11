'use strict';

angular.module('app')
  .directive('svInputNumbers', function () {
    return {
      link: function ($scope, element, attrs) {
        $scope.$watch(function () {
          return $scope.inputModel;
        }, function (newValue, oldValue) {
          if (_.isUndefined(newValue)) {
            if (_.isUndefined(oldValue)) {
              oldValue = '';
            }
            $scope.inputModel = oldValue;
          }
          console.log(newValue);
          console.log(oldValue);
        });
      }
    };
  });
