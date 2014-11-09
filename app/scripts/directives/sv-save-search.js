'use strict';

angular.module('app')
  .directive('svSaveSearch', function (QueryService, $rootScope, notifications) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.searchSaved = notifications.searchSaved;
        $scope.isRunFromSaved = $rootScope.query ? $rootScope.query.isRunFromSaved : false;

        $scope.isQueryEmpty = _.isUndefined($rootScope.query);
        $scope.saveThisSearch = function () {
          var query = $rootScope.query;
          query = QueryService.process(query);

          QueryService.save(query).then(function () {
            $scope.isRunFromSaved = true;
          });
        };
      }
    };
  });
