'use strict';

angular.module('app')
  .directive('svPhotoGallery', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-photo-gallery.html',
      link: function ($scope, element, attr) {

      }
    };
  });
