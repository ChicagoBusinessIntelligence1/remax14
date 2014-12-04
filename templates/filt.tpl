'use strict';

angular.module('app')
  .filter('#name#', function () {
    return function (input) {
      return input;
    };
  });
