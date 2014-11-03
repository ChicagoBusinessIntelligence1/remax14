'use strict';

angular.module('app')
  .factory('HomePropertyService', function () {
    return {
      find: function (home, propertyTitle) {

        for (var i = home.length - 1; i >= 0; i--) {
          var section = home[i].content;
          for (var j = section.length - 1; j >= 0; j--) {
            var sectionProperty = section[j];
            if (sectionProperty.title === propertyTitle ) {
              return sectionProperty.value;
              break;
            }
          }
        }
        return null;
      },
      findInSection: function (section, propertyTitle) {

          for (var j = section.content.length - 1; j >= 0; j--) {
            var sectionProperty = section.content[j];
            if (sectionProperty.title === propertyTitle ) {
              return sectionProperty.value;
              break;
            }
          }
        return null;
      }
    };
  });
