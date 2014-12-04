'use strict';

angular.module('app')
  .factory('AddSearchFeaturesService', function (HomePropertyService) {
    return {
      repoUrl: null,
      repoRef: null,

      decorate: function (home) {
        home[0]['date'] = new Date().toLocaleString();
        home[0]['type'] = HomePropertyService.find(home, 'propertyType');
        home[0]['city'] = HomePropertyService.find(home, 'city');
        home[0]['price'] = HomePropertyService.find(home, 'price');
        return home;
      },
      decorateSection: function (section) {
        section['type'] = HomePropertyService.findInSection(section, 'propertyType');
        section['city'] = HomePropertyService.findInSection(section, 'city');
        return section;
      }

    };
  });
