'use strict';

angular.module('app')
  .directive('svImageUpload', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-image-upload.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
