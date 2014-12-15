'use strict';

angular.module('app')
  .directive('svFlipContainer', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {
      },

      controller: function ($scope) {

      },
      link: function ($scope, element, attr) {
        $scope.$watch('bothShown', function (newValue, oldValue) {
          console.log(newValue);
        });
      }
    };
  });
