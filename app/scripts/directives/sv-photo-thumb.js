'use strict';

angular.module('app')
  .directive('svPhotoThumb', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',

      scope: {
        style: '@',
        img: '@',
        height: '@',
        width: '@',
        backgroundPosition: '@'
      },
      link: function ($scope, element, attr) {
        element.addClass($scope.style);
        $scope.backgroundPosition = $scope.backgroundPosition || '50% 25%';
        element.css({
          'background-image': 'url(' + $scope.img + ') no-repeat',
          'background-size': '125% auto',
          'background-position': $scope.backgroundPosition,
          'position': 'relative',
          'height': $scope.height + 'px',
          'width': $scope.width + 'px'
        });
      }
    };
  });

