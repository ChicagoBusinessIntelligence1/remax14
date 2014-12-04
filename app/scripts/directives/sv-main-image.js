'use strict';

angular.module('app')
  .directive('svMainImage', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-main-image.html',
      scope: {
        img: '@',
        height: '@',
        width: '@'
      },
      link: function ($scope, element, attr) {
        element.css({
          'background-image': 'url(' + $scope.img + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'position': 'relative',
          'height': $scope.height + 'px',
          'width': $scope.width + 'px'
        });
      }
    };
  });
