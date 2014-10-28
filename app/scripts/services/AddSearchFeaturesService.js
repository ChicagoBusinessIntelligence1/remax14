'use strict';

angular.module('app')
  .factory('AddSearchFeaturesService', function (HomePropertyService) {
        return {
          repoUrl: null,
          repoRef: null,

          decorate: function (home) {
            home[0]['date']= new Date().toLocaleString();
            home[0]['type']= HomePropertyService.find(home, 'propertyType')

            return home;
          }
        };

  });
