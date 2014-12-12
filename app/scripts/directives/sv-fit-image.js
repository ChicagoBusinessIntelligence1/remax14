'use strict';

angular.module('app')
  .directive('svFitImage', function () {
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
          var proportion = 1.5;
          if (($scope.h * proportion) < $scope.w) {
            width = $scope.h * proportion;
            $scope.width=width;
            height = $scope.h;
            bgSize = 'auto 100%';
          } else {
            width = $scope.w;
            height = $scope.w / proportion;
            $scope.height=height;
            bgSize = '100% auto';
          }

          element.css({
            'background-image': 'url(' + $scope.url + ')',
            'box-shadow': '0 10px 20px -5px rgba(0, 0, 0, 0.5)',
            'background-size': bgSize,
            'background-position': '0% 0%',
            'background-repeat': 'no-repeat',
            'position': 'relative',
            'width': width + 'px',
            'height': height + 'px',
            'border':'1px #ccc solid',
            'border-bottom':'2px #bbb solid',
            'border-top':'1px #ddd solid',
            'border-radius':'10px',
            '-webkit-border-radius':'10px'

          });

        });

      }
    };
  });
