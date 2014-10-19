'use strict';

angular.module('app')
  .filter('#jname#', function () {
    return function (input) {
      return input;
    };
  });
