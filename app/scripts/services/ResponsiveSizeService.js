'use strict';

angular.module('app')
  .factory('ResponsiveSizeService', function (flipSettings, $rootScope) {
    return {
      compute: function (data) {
        var window = data.window;
        var config = flipSettings;
        var percentWidth;

        if (window.innerWidth > config.screenSizeLimit) {
          percentWidth = config.largeScreenPart;
        } else {
          percentWidth = config.smallScreenPart;
        }

        var height = config.percentHeight * window.innerHeight;
        var width = percentWidth * window.innerWidth;
        if (width > height * config.proportions) {
          width = config.proportions * height;
          if (width > config.largeScreenPart * data.parentWidth) {
            width = config.largeScreenPart * data.parentWidth;
            height = width / config.proportions;
          }
        } else {
          if (width < config.smallDeviceLimit) {
            width *= config.smallDeviceWidthNormalizer;
          }
          height = width / config.proportions;
        }
        data.scope.h = height;
        data.scope.w = width;
      }
    };
  });
