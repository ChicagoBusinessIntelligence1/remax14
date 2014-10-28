'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (paging, homes, $scope) {
    $scope.sortBy = {
      val: 'date'
    };

    $scope.paging = paging;
    $scope.currentPage = 1;

    $scope.homes = homes;
    $scope.totalPages = Math.ceil(homes.length / paging);
    $scope.isDataLoading = false;

  });

