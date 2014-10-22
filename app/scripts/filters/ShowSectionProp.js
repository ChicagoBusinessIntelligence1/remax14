'use strict';

angular.module('app')
  .filter('showSectionProp', function () {
    return function (home, propName) {
      var foundProp;
      for (var i = 0; i < home.length; i++) {
        var section = home[i];
        var props = section.content;
        foundProp = _.find(props, function (el) {
          return el.title === propName;
        });
        if (!_.isUndefined(foundProp)) {
          break;
        }
      }
      return foundProp ? foundProp.value : '';
    };
  });
