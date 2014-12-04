'use strict';

angular.module('app')
  .filter('startFrom', function (pageHomesNumber) {
    return function (homes, currentPage) {
      var pagesToFilter = (currentPage - 1) * pageHomesNumber;
      var fromIndexStartFilter = pagesToFilter;
      if (!_.isUndefined(homes)) {

        var filteredHomes = _.rest(homes, fromIndexStartFilter);
        return filteredHomes;

      }
    };
  });
