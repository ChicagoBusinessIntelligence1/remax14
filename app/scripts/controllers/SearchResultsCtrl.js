'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (SearchService, $scope, url) {
    $scope.isDataLoading = true;
    SearchService.find().then(function (homes) {
      $scope.homes = homes;
      $scope.isDataLoading = false;

    })
  });

