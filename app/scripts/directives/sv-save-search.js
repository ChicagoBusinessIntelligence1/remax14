'use strict';

angular.module('app')
  .directive('svSaveSearch', function (QueryService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.saveThisSearch = function () {
          var query = $rootScope.query;
          query  = QueryService.process(query);
          QueryService.save(query);
        };
      }
    };
  });
