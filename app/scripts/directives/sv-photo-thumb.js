'use strict';

angular.module('app')
  .directive('svPhotoThumb', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<img ng-src="{{img}}" ng-style="{width:size, height:size}" >',

      scope: {
        img: '@',
        size: '=',
      },
      link: function ($scope, element, attr) {

      }
    };
  });
