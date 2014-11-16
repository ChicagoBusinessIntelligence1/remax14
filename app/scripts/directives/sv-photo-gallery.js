'use strict';

angular.module('app')
  .directive('svPhotoGallery', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        home: '='
      },
      templateUrl: '../../views/directives/sv-photo-gallery.html',
      link: function ($scope, element, attr) {

      }
    };
  });
