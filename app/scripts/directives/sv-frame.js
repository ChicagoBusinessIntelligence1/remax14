'use strict';

angular.module('app')
  .directive('svFrame', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/sv-frame.html',
      scope: {
        elementClass: '@'
      },
      link: function ($scope, element, attrs) {
        $scope.isInfoShown = false;
        var el = angular.element(_.first((element.find('div'))));
        //console.log(el.html());
        element.hover(function () {
          $scope.$apply(function () {
            $scope.isInfoShown = true;
          });
        }, function () {

          $scope.$apply(function () {
            $scope.isInfoShown = false;
          });
        })
      }
    };
  });
