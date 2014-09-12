'use strict';

angular.module('app')
  .directive('svFrame', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/sv-frame.html',
      scope: {
        elementClass: '@',
        title: '@',
        fenElementActive: '='
      },
      link: function ($scope, element, attrs) {

        $scope.isInfoShown = false;
        element.hover(function () {
          $scope.$apply(function () {
            $scope.isInfoShown = true;
            $scope.fenElementActive.val = $scope.elementClass;
          });
        }, function () {

          $scope.$apply(function () {
            $scope.isInfoShown = false;
          });
        })
      }
    };
  });
