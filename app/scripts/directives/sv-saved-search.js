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
            $rootScope.query = query;
            $rootScope.$broadcast('run-saved-search');
            $state.go('app.search-sale-results', query);
          });
        };
      }
    };
  });
