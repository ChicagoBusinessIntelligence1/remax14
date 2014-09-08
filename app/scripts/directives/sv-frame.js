'use strict';

angular.module('app')
  .directive('svFrame', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/sv-frame.html',
      scope: {
        color: '@',
        n: '@'
      },
      link: function ($scope, element, attrs) {
        $scope.isInfoShown = false;
        var el = (element.find('div'));
        console.log(el.length);
        el.on('mouseover', function (e) {
        $scope.isInfoShown = true;
          console.log($scope.isInfoShown);
        })

        el.on('mouseout', function (e) {
        $scope.isInfoShown = false;
          console.log($scope.isInfoShown);
        })
      }
    };
  });
