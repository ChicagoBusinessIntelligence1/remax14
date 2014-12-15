'use strict';

angular.module('app')
  .factory('ResponsiveSizeService', function (responsiveGallerySettings, $rootScope) {
    return {
      compute: function (data) {
        //data consists of 3 params: window, scope and viewContentWidth
        //we pass them like objects when using this method
        var window = data.window;
        var config = responsiveGallerySettings;

        var percentWidth;
        // define width coefficients for large and small devices
        if (window.innerWidth > config.screenSizeLimit) {
          percentWidth = config.largeScreenPart;
        } else {
          percentWidth = config.smallScreenPart;
        }
        //preliminary params for correct proportions on any window size
        var width = percentWidth * window.innerWidth;
        var height = config.percentHeight * window.innerHeight;
        if (width > height * config.proportions) {
          /*if width is our limiting factor, we multiply width by 1.5 to keep proportions 6x4*/
          width = config.proportions * height;
        } else {
          /*if height is our limiting factor, we multiply height by 1.5 to keep proportions 6x4*/
          height = width / config.proportions;
        }

        //Normalize width on Extra-small screens to have some margins
        if (width < config.smallDeviceLimit) {
          width *= config.smallDeviceWidthNormalizer;
          height = width / config.proportions;
        }
        //Decrease width on Extra-large screen to be 50% of content
        if (data.viewContentWidth > config.screenSizeLimit && width > config.largeScreenPart * data.viewContentWidth) {
          width = config.largeScreenPart * data.viewContentWidth;
          height = width / config.proportions;
        }
        data.scope.h = height;
        data.scope.w = width;
      }
    };
  });
