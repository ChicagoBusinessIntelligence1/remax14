'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (paging, SearchService, $scope, url) {

    $scope.paging = paging;

    $scope.isDataLoading = true;
    SearchService.find().then(function (homes) {
      $scope.homes = homes;
      $scope.isDataLoading = false;

    })
  });

