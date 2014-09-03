'use strict';

angular.module('app')
  .filter('Test', function () {
    return function (input) {
      return 'test filter: ' + input;
    };
  });
