'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, $famous, $window, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        var Transform = $famous['famous/core/Transform'];
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Easing = $famous['famous/transitions/Easing'];

        $scope.colorSkin = '#272727';
        var screenSizeLimit = 960;
        var smallDeviceLimit = 700;

        var smallDeviceWidthNormalizer = 0.83;

        var percentWidth = $window.innerWidth > screenSizeLimit ? 0.5 : 1;
        var percentHeight = 0.5;
	      var proportions = 1.5;


        var height = percentHeight * $window.innerHeight;
        var width = percentWidth * $window.innerWidth;
        if (width > height * proportions) {
          $scope.w = proportions * height;
          $scope.h = height;
        } else {
          if (width<smallDeviceLimit) {
            width*=smallDeviceWidthNormalizer;
          }

          $scope.w = width;
          $scope.h = $scope.w/proportions;

        }

        $scope.bookStyle = {
          boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)',
          padding: $scope.w *0.03+'px'
        };

        $scope.homeAppStyle = {
          backgroundColor: 'lighten($scope.colorSkin, 96%)',
          width: $scope.w + 'px',
          height: $scope.inith + 'px'
        };

        $($window).resize(function () {
          $scope.$apply(function () {

            var percentWidth = $window.innerWidth > screenSizeLimit ? 0.5 : 1;
            height = percentHeight * $window.innerHeight;
            width = percentWidth * $window.innerWidth;
            if (width > height * proportions) {
              $scope.w = proportions * height;
              $scope.h = height;
            } else {
              if (width<smallDeviceLimit) {
                width*=smallDeviceWidthNormalizer;
              }

              $scope.w = width;
              $scope.h = $scope.w/proportions;

            }

            $scope.bookStyle = {
              boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)',
              padding: $scope.w *0.03+'px'
            };

            $scope.homeAppStyle = {
              backgroundColor: 'lighten($scope.colorSkin, 96%)',
              width: $scope.w + 'px',
              height: $scope.inith + 'px'
            };
          })
        })

        var angle = -Math.PI / 2;
        var angle0 = -2 * Math.PI;

        $scope.nextPage = function (home) {
          $scope.activeIndex++;

          home.flip.set(angle, {duration: 1000, curve: 'linear'});
          if ($scope.activeIndex == $scope.homes.length) {
            console.log('last');
            $timeout(function () {
              console.log('run');
              $scope.homes = _.map($scope.allHomes, function (home) {
                var flip = new Transitionable(0);
                return _.extend(home, {
                  flip: flip
                })
              });
              $scope.activeIndex = 0;
            }, 850);

          }
        };

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.activeIndex = 0;
          $scope.allHomes = _.map(homes, function (home) {
            var flip = new Transitionable(0);
            return _.extend(home, {
              flip: flip
            })
          });
          $scope.homes = ($scope.allHomes).reverse();
        })
      }
    }
  });
