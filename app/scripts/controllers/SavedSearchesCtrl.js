'use strict';

angular.module('app')
  .controller('SavedSearchesCtrl', function ($scope, QueryService) {
    QueryService.all().then(function (searches) {
      $scope.searches = searches;
    })
  });
