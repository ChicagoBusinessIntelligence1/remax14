'use strict';

angular.module('app')
  .filter('Property', function () {
    return function (input) {
      return input;
    };
  });
