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
        var img =
        $scope.imgWidth = angular.element(element.find('img').parent()).width()+10;

        $scope.isInfoVisible = false;

        element.hover(function () {
            //  over
            $scope.$apply(function () {
              $scope.isInfoVisible = true;
            });

          },
          function () {
            //  out

            $scope.$apply(function () {
              $scope.isInfoVisible = false;
            });
          })

      }
    };
  });
