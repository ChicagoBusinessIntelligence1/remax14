'use strict';

angular.module('app')
  .filter('keyConversion', function () {
    return function (input) {

      //substring a title, apply humanize(convert from camel case to spaces), titleize
      var key = _.str.titleize(_.str.humanize(input));
      return key;
    };
  });
