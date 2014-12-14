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

          //responsive design for large devices
          if (width > config.largeScreenPart * data.viewContentWidth) {
            /*if width of directive is more then half of view content width,
             * we set width to 50% of container width
             * then calculate height accordingly to our proportions*/
            width = config.largeScreenPart * data.viewContentWidth;
            height = width / config.proportions;
          }

        } else {
          //if device screen is less then 700, apply normalizing to display gallery correctly
          if (width < config.smallDeviceLimit) {
            width *= config.smallDeviceWidthNormalizer;
          }
          /*if height is our limiting factor, we multiply height by 1.5 to keep proportions 6x4*/
          height = width / config.proportions;
        }
        //we set w and h on our scope to operate with
        // this parameters on directive view
        data.scope.h = height;
        data.scope.w = width;
      }
    };
  });
