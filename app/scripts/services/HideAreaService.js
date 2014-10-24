'use strict';

angular.module('app')
  .factory('HideAreaService', function ($filter) {
    return {
      hideArea: function (hiddenAreaInSections, title) {

        var sectionTitle = ($filter('keyConversion')(title));
        return hiddenAreaInSections.indexOf(sectionTitle)>-1;
      }
    };

  });
