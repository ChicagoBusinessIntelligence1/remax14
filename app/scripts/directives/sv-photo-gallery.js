'use strict';

angular.module('app')
  .directive('svPhotoGallery', function (HomeService, $famous) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        images: '='
      },
      templateUrl: '../../views/directives/sv-photo-gallery.html',
      link: function ($scope, element, attr) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Transform = $famous['famous/core/Transform'];




          $scope.variousTransforms = function() {
            var translate = Transform.translate(100, 100, 0);
            return Transform.multiply(translate, skew);
          };
        $scope.thumbOptions = {
          dimensions: [1,2],

        };
        $scope.selectedImage = $scope.images.content[0];
        $scope.setSelectedImage = function (image) {
          $scope.opacity={opacity:0.1,{duration:1000}};
          $scope.selectedImage = image;
        };
      }
    };
  });
