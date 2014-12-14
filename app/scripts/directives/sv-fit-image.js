'use strict';

angular.module('app')
  .directive('svFitImage', function (responsiveGallerySettings) {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      scope: {
        url: '=',
        w: '=',
        h: '='
      },

      link: function ($scope, element, attr) {

        $scope.$watchGroup(['w', 'h'], function (newValues, oldValues) {
          if (_.isUndefined(newValues[0] || _.isUndefined(newValues[1]))) {
            return;
          }
          var height, width, bgSize;
          var proportion = responsiveGallerySettings.proportions;

          if (($scope.h * proportion) < $scope.w) {
            width = $scope.h * proportion;
            $scope.width = width;
            height = $scope.h;
            bgSize = 'auto 100%';
          } else {
            width = $scope.w;
            height = $scope.w / proportion;
            $scope.height = height;
            bgSize = '100% auto';
          }

          element.css({
            'background-image': 'url(' + $scope.url + ')',
            'boxShadow': '0 3px 12px -5px rgba(139, 139, 139, 139)',
            'background-size': bgSize,
            'background-position': '0% 0%',
            'background-repeat': 'no-repeat',
            'position': 'relative',
            'width': width + 'px',
            'height': height + 'px',
            'border': '1px #ccc solid',
            'border-bottom': '2px #bbb solid',
            'border-top': '1px #ddd solid',
            'border-radius': '7px',
            '-webkit-border-radius': '7px'

          });
        });
      }
    };
  });
