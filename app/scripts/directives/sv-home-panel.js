'use strict';

angular.module('app')
  .directive('svHomePanel', function (ResponsiveSizeService HousesFrontImagesService, $famous, $window, $timeout, flipSettings) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.activeIndex = 0;
          $scope.homes = homes;
        })

        var config = flipSettings;

        var percentWidth = $window.innerWidth > config.screenSizeLimit ? 0.5 : 1;

        function extracted(config,window) {
          var height = config.percentHeight * $window.innerHeight;
          var width = percentWidth * $window.innerWidth;
          if (width > height * config.proportions) {
            $scope.h = height;
            $scope.w = config.proportions * height;
          } else {
            if (width < config.smallDeviceLimit) {
              width *= config.smallDeviceWidthNormalizer;
            }
            $scope.w = width;
            $scope.h = $scope.w / config.proportions;
          }
          return {height: height, width: width};
        }

        var __ret = extracted();
        var height = __ret.height;
        var width = __ret.width;
        $($window).resize(function () {
          $scope.$apply(function () {

            var percentWidth = $window.innerWidth > config.screenSizeLimit ? 0.5 : 1;
            height = config.percentHeight * $window.innerHeight;
            width = percentWidth * $window.innerWidth;
            if (width > height * config.proportions) {
              $scope.w = config.proportions * height;
              $scope.h = height;
            } else {
              if (width < config.smallDeviceLimit) {
                width *= config.smallDeviceWidthNormalizer;
              }
              $scope.w = width;
              $scope.h = $scope.w / config.proportions;
            }
          })
        })

        var angle = -Math.PI / 2;

        $scope.nextPage = function (home) {
          $scope.activeIndex++;

          home.flip.set(angle, {duration: 1000, curve: 'linear'});
          home.opacity.set(0.9, {duration: 1000, curve: "linear"});
          if ($scope.activeIndex == $scope.homes.length) {
            $timeout(function () {
              $scope.activeIndex = 0;
              $scope.homes = HousesFrontImagesService.initialState($scope.homes);
            }, 950);

          }
        };

        /*CSS Styles*/
        $scope.bookStyle = {
          boxShadow: '0 3px 12px -5px rgba(139, 139, 139, 139)',
          padding: $scope.w * 0.03 + 'px'
        };

        $scope.homeAppStyle = {
          width: 1.2 * $scope.w + 'px',
          height: 1.2 * $scope.h + 'px'
        };
      }
    }
  });
