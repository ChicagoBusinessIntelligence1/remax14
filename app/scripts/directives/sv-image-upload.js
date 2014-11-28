'use strict';

angular.module('app')
  .directive('svImageUpload', function (FileUploader) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-image-upload.html',
      link: function ($scope, element, attr) {
        //$scope.uploader = new FileUploader();
        var breakPoint = 1;
      }
    };
  });
