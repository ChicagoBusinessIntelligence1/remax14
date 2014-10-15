'use strict';

angular.module('app')
  .filter('listingFilter', function () {
    return function (listing) {
      listing = _.omit(listing,'brokers');
      return  listing;
    };
  });
