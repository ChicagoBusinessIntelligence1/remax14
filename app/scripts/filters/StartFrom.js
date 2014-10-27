'use strict';

angular.module('app')
  .filter('startFrom', function (paging) {
    return function (homes, currentPage) {
      var pagesToFilter = (currentPage-1)*paging;
      var fromIndexStartFilter = pagesToFilter;
      var filteredHomes = _.rest(homes,fromIndexStartFilter);
      return filteredHomes;
    };
  });
