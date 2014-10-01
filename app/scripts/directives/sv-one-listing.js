'use strict';

angular.module('app')
  .directive('svOneListing', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-one-listing.html',
      scope: {

      },
      link: function ($scope, element, attr) {
        $scope.isVisible = false;

        $scope.toggle = function () {

        $scope.isVisible = !$scope.isVisible;
        };
      }
    };
  });
