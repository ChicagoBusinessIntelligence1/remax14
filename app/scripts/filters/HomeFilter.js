'use strict';

angular.module('app')
  .filter('homeFilter', function () {
    return function (listing, omit) {
      if (_.isUndefined(listing)) {
        return;
      }
      listing = _.reject(listing, function (elem) {
        return _.isArray(elem) && elem.$id==='brokers';
      });
      return  listing;
    };
  });
