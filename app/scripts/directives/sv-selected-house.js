'use strict';

angular.module('app')
  .directive('svSelectedHouse', function () {
    return {
      templateUrl: '../views/directives/sv-selected-house.html',
      restrict: 'E',
      scope: {
        id: '@',
        houses: '='
      },
      link: function ($scope, element, attr) {
        $scope.isInfoVisible = false;
      }
    };
  });
