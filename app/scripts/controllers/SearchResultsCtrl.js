'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (SearchService, $scope, url) {
    SearchService.find().then(function (homes) {
      $scope.homes = homes;
    })
  });

