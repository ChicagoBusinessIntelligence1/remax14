'use strict';

angular.module('app')
  .directive('svInputNumbers', function () {
    return {
      link: function ($scope, element, attrs) {
        $scope.$watch(function (newValue, oldValue) {
            console.log($scope);
          if (_.isUndefined(newValue)) {
            $scope.inputModel = oldValue;
          }
        });
      }
    };
  });
