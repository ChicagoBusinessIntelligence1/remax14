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
        // define whether it is large or small device
        if (window.innerWidth > config.screenSizeLimit) {
          // full window size coefficient for large devise
          percentWidth = config.largeScreenPart;
        } else {
          // half window size coefficient for small devise
          percentWidth = config.smallScreenPart;
        }
        // calculate preliminary parameters width and height to display
        // gallery background container correctly on any window h and w size
        var width = percentWidth * window.innerWidth;
        var height = config.percentHeight * window.innerHeight;

        if (width > height * config.proportions) {
          width = config.proportions * height;

        } else {
          height = width / config.proportions;
        }

        //Decrease width on Extra-small screens to have some margins
        if (width < config.smallDeviceLimit) {
          width *= config.smallDeviceWidthNormalizer;
          height = width / config.proportions;
        }
        //Decrease width on Extra-large screen to be 50% of content
        if (width > config.screenSizeLimit && width > config.largeScreenPart * data.viewContentWidth) {
          width = config.largeScreenPart * data.viewContentWidth;
          height = width / config.proportions;
        }

        //Decrease width on Extra-small screens to be have some margins
        //we set w and h on our scope to operate with
        // this parameters on directive view
        data.scope.h = height;
        data.scope.w = width;
      }
    };
  });
