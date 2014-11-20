'use strict';

angular.module('app')
  .directive('svPhotoGallery', function (HomeService, $famous, $window, $media, $timeline) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        images: '='
      },
      templateUrl: '../../views/directives/sv-photo-gallery.html',
      link: function ($scope, element, attr) {
        var listing = $('.listing');

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];

        $scope.w = angular.element($window);

        $scope.initialWidth = listing.width();
        $scope.initialHeight = 610;

        var initialThumbSize = 110;

        $scope.thumbSize = initialThumbSize;

        $scope.width = $scope.initialWidth;
        $scope.height = $scope.initialHeight;

        $scope.galleryStyle = {
          width: $scope.width + 'px',
          height: $scope.height + 'px'
        };
        var coeficient = 1;
        $(window).resize(function () {
          $scope.$apply(function () {

            var w = listing.width();
            coeficient = w / $scope.initialWidth;
            var h = coeficient * $scope.initialHeight + 120;
            $scope.thumbSize = coeficient * initialThumbSize;

            if (w > $scope.initialWidth) {
              $scope.width = $scope.initialWidth;
            } else {
              $scope.width = w;
            }
            if (h > $scope.initialHeight) {
              $scope.height = $scope.initialHeight;
            } else {
              $scope.height = h;
            }
            $scope.galleryStyle = {
              width: $scope.width + 'px',
              height: $scope.height + 'px'
            };
          });
        });

        $scope.flex = {
          ratio: [2, 1],
          transition: true
        };

        $scope.scrollHandler = new EventHandler();
        $scope.options = {
          imageScroll: {
            paginated: true,
            direction: 0
          }
        };

        $scope.slideRight = function () {
          var scrollView = $famous.find('#imageScroll')[0].renderNode;
          scrollView.goToNextPage();

        };
        $scope.slideLeft = function () {
          var scrollView = $famous.find('#imageScroll')[0].renderNode;
          scrollView.goToPreviousPage();

        };
        $scope.$watch('images', function (newValue, oldValue) {
          if (_.isUndefined(newValue)) {
            return;
          }
          $scope.faImages =
            _.map(_.compact($scope.images), function (image) {
              var opacity = new Transitionable(0);
              return {
                url: image,
                opacity: opacity
              }
            });
          $scope.setSelectedImage($scope.faImages[0]);
        });

        $scope.setSelectedImage = function (image, $done) {
          if ($scope.selectedImage) {
            $scope.selectedImage.opacity.set(0, {duration: 250, curve: "linear"});
          }
          $scope.selectedImage = image;
          $scope.selectedImage.opacity.set(1, {duration: 1250, curve: "linear"}, $done);
        };

    }
    };
  });
