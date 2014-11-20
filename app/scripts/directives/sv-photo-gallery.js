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
        var i = 5;
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var Transform = $famous['famous/core/Transform'];

        $media.$sheet('State1Sheet', {
          xs: {
            '#left-column': {
              transform: function () {
                var translate = $timeline(
                  [0, [10, 150, 0]]);
                return Transform.translate.apply(this, translate);
              }
            }
          },
          sm: {
            '#left-column': {
              transform: function () {
                var translate = $timeline(
                  [0, [220, 190, 0]]);
                return Transform.translate.apply(this, translate);
              },
            }
          }

        });
        $scope.w = angular.element($window);

        $scope.width = 586;
        $scope.height = 500;
        $scope.galleryStyle = {
          width: $scope.width + 'px',
          height: $scope.height + 'px'
        };
        $(window).resize(function () {
          $scope.$apply(function () {

            $scope.width = $scope.w.innerWidth();
            $scope.height = $scope.w.innerHeight();

            if ($scope.width > 586) {
              $scope.width = 586;
            }
            if ($scope.height > 500) {
              $scope.height = 500;
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
