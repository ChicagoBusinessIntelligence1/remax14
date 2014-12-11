'use strict';

angular.module('app')
  .directive('svFitImage', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',

      scope: {
        url:'=',
        w:'@',
        h:'@'

      },
      link: function ($scope, element, attr) {
        if ($scope.w/2> $scope.h) {
          $scope.w= $scope.h*2;
        } else{
          $scope.h= $scope.w/2;
        }

        element.css({
          'background-image': 'url(' + $scope.url + ')',
          'background-size': '125% auto',
          'background-position': '50% 25%',
          'position': 'relative',
          'height': $scope.h + 'px',
          'width': $scope.w + 'px'
        });



      }
    };
  });
