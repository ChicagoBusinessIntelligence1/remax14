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
        var el = $(element.children()[0]);
        el.on('mouseover', function (e) {
          isInfoShown = true;
          console.log(isInfoShown);
        })

        el.on('mouseout', function (e) {
          isInfoShown = false;
          console.log(isInfoShown);
        })
      }
    };
  });
