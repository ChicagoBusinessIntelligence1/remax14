'use strict';

angular.module('app')
  .filter('keyConversion', function () {
    return function (input) {
      //find underscore and put cursor after it
      var start = input.indexOf('_')+1;

      //substring a title, apply humanize(convert from camel case to spaces), titleize
      var key = _.str.titleize(_.str.humanize(input.substr(start)));
      return key;
    };
  });
