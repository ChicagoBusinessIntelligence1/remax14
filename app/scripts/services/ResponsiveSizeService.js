'use strict';

angular.module('app')
  .factory('ResponsiveSizeService', function (flipSettings, $rootScope) {
    return {
      compute: function (data) {
        //data consists of 3 params: window, scope and viewContentWidth
        //we pass them like objects when using this method
        var window = data.window;

        var config = flipSettings;
        var percentWidth;
        if (window.innerWidth > config.screenSizeLimit) {
          percentWidth = config.largeScreenPart;
        } else {
          percentWidth = config.smallScreenPart;
        }

        var width = percentWidth * window.innerWidth;
        var height = config.percentHeight * window.innerHeight;

        if (width > height * config.proportions) {
          width = config.proportions * height;
          if (width > config.largeScreenPart * data.viewContentWidth) {
            width = config.largeScreenPart * data.viewContentWidth;
            height = width / config.proportions;
          }

        } else {
          if (width < config.smallDeviceLimit) {
            width *= config.smallDeviceWidthNormalizer;
          }
          height = width / config.proportions;
        }
        //we set w and h on our scope to operate with
        // this parameters on directive view
        data.scope.h = height;
        data.scope.w = width;
      }
    };
  });
