'use strict';

angular.module('app')
  .filter('showSectionProp', function () {
    return function (home, propName) {
      for (var i = 0; i < home.length; i++) {
        var section = home[i];
        var props = section.content;
        var prop = _.find(props, function (el) { return el.title === propName; });
      return prop.value;
      }
    };
  });
