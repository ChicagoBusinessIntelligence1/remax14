'use strict';

angular.module('app')
  .filter('homeFilter', function () {
    return function (listing, omit) {
      var omitArr;
      if (_.isUndefined(listing)) {
        return;
      }
      omitArr = omit.split(',');

      listing = _.reject(listing, function (elem) {
        return omit.indexOf(elem.title)>-1;
      });
      return  listing;
    };
  });
