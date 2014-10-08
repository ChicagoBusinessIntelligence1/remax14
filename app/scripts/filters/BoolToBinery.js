'use strict';

angular.module('app')
  .filter('boolToBinery', function () {
    return function (input) {
      if (input === true) {
        return 'Yes';
      }
      if (input === false) {
        return 'No';
      }
      return input;
    };
  });
