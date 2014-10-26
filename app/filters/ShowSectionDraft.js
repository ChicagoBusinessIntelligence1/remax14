'use strict';

angular.module('app')
  .filter('showSectionDraft', function () {
    return function (draft, propName) {
      for (var i = 0; i < draft.length; i++) {
        var section = draft[i];
        var props = section.content;
        var prop = _.find(props, function (el) {
          return el.title === propName;
        });
        return prop.value;
      }
    };
  });
