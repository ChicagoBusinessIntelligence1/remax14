'use strict';

angular.module('app')
  .controller('SearchResultsCtrl', function (SearchService, $scope,url) {
    $scope.query;
    $scope.$on('search', function (event, query) {



    });
  });

