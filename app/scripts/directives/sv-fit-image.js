'use strict';

angular.module('app')
  .directive('svFitImage', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',

      scope: {
        url:'=',
        w:'=',
        h:'='

      },
      link: function ($scope, element, attr) {
        $scope.$watchGroup(['w','h'], function (newValues, oldValues) {
          if (_.isUndefined(newValues[0] || _.isUndefined(newValues[1]))) {
            return;
          }

          var height,width, bgSize;
	        var proportion = 1.5;
          if ($scope.w/ proportion> $scope.h) {
            width = $scope.h*proportion;
            height= $scope.h;
            bgSize = 'auto 100%';
          } else{
            width= $scope.w;
            height = $scope.w/proportion;
            bgSize = '100% auto';
          }

          element.css({
            'background-image': 'url(' + $scope.url + ')',
            'background-size': bgSize,
            'background-position': '0% 0%',
            'background-repeat': 'no-repeat',
            'position': 'relative',
            'margin':'0 auto',
            'width': width + 'px',
            'height': height + 'px'
          });

        });





      }
    };
  });
