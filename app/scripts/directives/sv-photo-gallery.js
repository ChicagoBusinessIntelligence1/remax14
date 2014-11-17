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
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.scrollHandler = new EventHandler();
        $scope.options = {
          imageScroll: {
            clipSize: 200,
            paginated: true,
            direction: 0,
          }
        };
        $scope.images = _.map($scope.images, function (image) {

          var opacity = new Transitionable(0);
          return {
            url: image,
            opacity: opacity
          }
        });

        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];

        $scope.setSelectedImage = function (image, $done) {
          if ($scope.selectedImage) {
            $scope.selectedImage.opacity.set(0, {duration: 250, curve: "linear"});
          }
          $scope.selectedImage = image;
          $scope.selectedImage.opacity.set(1, {duration: 1250, curve: "linear"}, $done);
        };

        $scope.setSelectedImage($scope.images[0]);

        $scope.sliderOptions = {
          dimensions: [2,3]
        };

      }
    };
  });
