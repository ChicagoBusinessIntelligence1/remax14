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
        height: '@'
      },
      link: function ($scope, element, attr) {
        element.addClass($scope.style);
        element.css({
          'background-image': 'url(' + $scope.img + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'position': 'relative',
          'height': $scope.height + 'px'
        });
      }
    };
  });
