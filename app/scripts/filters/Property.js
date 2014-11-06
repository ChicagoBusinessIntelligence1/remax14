'use strict';

angular.module('app')
  .filter('property', function () {
    return function (input) {
      return input;
    };
  });
