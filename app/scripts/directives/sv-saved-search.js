'use strict';

angular.module('app')
  .directive('svSavedSearch', function (QueryService,$rootScope, $state) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-saved-search.html',
      scope: {
        search:'='
      },
      link: function ($scope, element, attr) {
        $scope.runSearch = function () {
          QueryService.run($scope.search.$id).then(function (query) {
            query.isRunFromSaved = true;
            $rootScope.query = query;
            $state.go('app.search-sale-results', query, {reload: true});
          });
        };
      }
    };
  });
