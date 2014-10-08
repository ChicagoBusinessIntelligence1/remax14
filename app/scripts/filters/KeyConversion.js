'use strict';

angular.module('app')
  .filter('keyConversion', function () {
    return function (input) {
      var start = input.indexOf('_')+1;
      var key = _.str.titleize(_.str.humanize(input.substr(start)));
      return key;
    };
  });
