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
        $scope.imgWidth = angular.element(element.find('img').parent()).width()+10;
        $scope.imgHeight = $(element.find('img').parent()).height();
        $scope.imgHeight2 = angular.element(element.find('img')).outerHeight();
        $scope.imgHeight3 = angular.element(element.find('img')).height();

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
