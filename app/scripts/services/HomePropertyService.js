'use strict';

angular.module('app')
  .factory('HomePropertyService', function () {
    return {
      getHomeAddress: function (home) {
        var street = this.find(home, 'street');
        var city = this.find(home, 'city');
        var state = this.find(home, 'state');
        var zip = this.find(home, 'zip');
        return street + ', ' + city + ', ' + state+', '+zip;
      },
      find: function (home, propertyTitle) {

        for (var i = home.length - 1; i >= 0; i--) {
          var section = home[i].content;
          if (_.isUndefined(section)) {
           continue ;
          }
          for (var j = section.length - 1; j >= 0; j--) {
            var sectionProperty = section[j];
            if (_.isUndefined(sectionProperty)) {
              continue;
            }
            if (sectionProperty.title === propertyTitle) {
              return sectionProperty.value;
            }
          }
        }
        return null;
      },
      findInSection: function (section, propertyTitle) {

        for (var j = section.content.length - 1; j >= 0; j--) {
          var sectionProperty = section.content[j];
          if (sectionProperty.title === propertyTitle) {
            return sectionProperty.value;
            break;
          }
        }
        return null;
      }
    };
  });
