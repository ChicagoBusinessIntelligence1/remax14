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

          var height,width;
          if ($scope.w/2> $scope.h) {
            width = $scope.h*2;
            height= $scope.h;
          } else{
            width= $scope.w;
            height = $scope.w/2;
          }

          element.css({
            'background-image': 'url(' + $scope.url + ')',
            'background-size': '125% auto',
            'background-position': '50% 25%',
            'position': 'relative',
            'margin':'0 auto',
            'width': width + 'px',
            'height': height + 'px'
          });

        });





      }
    };
  });
