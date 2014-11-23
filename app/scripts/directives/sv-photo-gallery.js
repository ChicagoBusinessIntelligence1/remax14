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
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Easing = $famous['famous/transitions/Easing'];

        var listing = $('#home-listing');
        var horizontalShiftRatio = 0.93;
        var verticalShiftRatio = 0.84;
        var thumbRatio = 0.17;
        var heightRatio = 0.66;

        /*Our initial width for all calculations*/
        $scope.sectionWidth = listing.width();

        $scope.imageWidth = $scope.sectionWidth;
        $scope.imageHeight = $scope.sectionWidth * heightRatio;
        $scope.thumbWidth = $scope.imageWidth * thumbRatio;
        $scope.thumbHeight = $scope.thumbWidth * heightRatio;

        $scope.galleryHeight = $scope.imageHeight + $scope.thumbWidth;
        //parameter for vertical translation elements
        $scope.verticalShift = $scope.galleryHeight * verticalShiftRatio;

        /*Responsive design for our scroll buttons */
        switch (true) {
          case $scope.imageWidth >= 450 && $scope.imageWidth < 600:
            $scope.arrowClass = 'fa-2x';
            break;
          case $scope.imageWidth >= 600:
            $scope.arrowClass = 'fa-3x';
            break;
          default:
            $scope.arrowClass = 'fa-lg';
        }

        /*fa-app size*/
        $scope.galleryStyle = {
          width: $scope.sectionWidth + 'px',
          height: $scope.galleryHeight + 'px'
        };

        $(window).resize(function () {
          $scope.$apply(function () {
            $scope.imageWidth = listing.width();
            $scope.imageHeight = $scope.sectionWidth * heightRatio;
            $scope.thumbWidth = thumbRatio * $scope.imageWidth;
            $scope.galleryHeight = $scope.imageHeight + $scope.thumbWidth;
            $scope.horizontalShift = $scope.imageWidth * horizontalShiftRatio
            $scope.verticalShift = $scope.galleryHeight * verticalShiftRatio;
            $scope.arrowClass = $scope.imageWidth > 500 ? 'fa-3x' : 'fa-2x';
            $scope.galleryStyle = {
              width: $scope.sectionWidth + 'px',
              height: $scope.galleryHeight + 'px'
            };
          });
        });

        /******************************
         ***Gallery Slider Functionality
         ******************************/

        /*instance of EventHandler to pipe events from fa-scroll-handler*/
        $scope.scrollHandler = new EventHandler();
        /*options for displaying images on slider*/
        $scope.options = {
          imageScroll: { paginated: true,
            direction: 0
          }
        };
        /*find by id and slide to the next or previous page
         * goToNextPage() goToPreviousPage() paginates your ScrollView  by one item.
         * */
        $scope.slideRight = function () {
          var scrollView = $famous.find('#imageScroll')[0].renderNode;
          scrollView.goToNextPage();
        };
        $scope.slideLeft = function () {
          var scrollView = $famous.find('#imageScroll')[0].renderNode;
          scrollView.goToPreviousPage();
        };

        /*Firebase array*/
        $scope.$watch('images', function (newValue) {
          if (_.isUndefined(newValue)) {
            return;
          }
          /*Take array of images from Firebase, add to each image url and opacity*/
          $scope.faImages =
            _.map(_.compact($scope.images), function (image) {
              var opacity = new Transitionable(0);
              var scale = new Transitionable([1,1]);
              return {
                url: image,
                scale:scale,
                opacity: opacity
              }
            });
          /*When a gallery is loaded, first image is displayed as selected*/
          $scope.setSelectedImage($scope.faImages[0]);
        });

        /*When user select and image it appears on large view with animation(Transitionable method .set)
        * Large image surface modifier we use Famo.Us/Angular directive fa-opacity with .get*/
        $scope.setSelectedImage = function (image, $done) {
          if ($scope.selectedImage) {
            $scope.selectedImage.opacity.set(0, {duration: 250, curve: "linear"});
          }
          $scope.selectedImage = image;
          $scope.selectedImage.opacity.set(1, {duration: 1250, curve: "linear"}, $done);
        };
        $scope.scaleThumbUp = function (image, $done) {
          image.scale.set([1.1,1.1], {duration: 250, curve: Easing.inOutQuad}, $done);
        };
        $scope.scaleThumbDown = function (image, $done) {
          image.scale.set([1,1], {duration: 250, curve: Easing.inOutQuad}, $done);
        };
      }
    };
  });
