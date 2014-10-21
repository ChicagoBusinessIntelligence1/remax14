'use strict';

angular.module('app')
  .factory('MlsService', function () {
    return {
      find: function (home) {

        for (var i = home.length - 1; i >= 0; i--) {
          var section = home[i].content;
          for (var j = section.length - 1; j >= 0; j--) {
            var sectionProperty = section[j];
            if (sectionProperty.title === 'mls') {
              return sectionProperty.value;
              break;
            }
          }
        }
        return null;
      }
    };
  });
