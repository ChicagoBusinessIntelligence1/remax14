'use strict';

angular.module('app')
  .filter('keyUnconversion', function () {
    return function (input) {
      input= _.str.camelize(input.replace(' ','-'));
      input = input[0].toLowerCase()+input.substr(1);
      return input;
    };
  });
