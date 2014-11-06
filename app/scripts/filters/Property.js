'use strict';

angular.module('app')
  .filter('property', function () {
    return function (obj, omitProp) {
      obj = _.omit(obj, omitProp);
      return obj;
    };
  });
