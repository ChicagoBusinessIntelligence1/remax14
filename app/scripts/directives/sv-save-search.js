'use strict';

angular.module('app')
  .directive('svSaveSearch', function (QueryService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.isRunFromSaved = false
        $scope.$on('ss', function (event, data) {
          console.log('run');
          $scope.isRunFromSaved = true;
        });

        $scope.isQueryEmpty = _.isUndefined($rootScope.query);
        $scope.saveThisSearch = function () {
          var query = $rootScope.query;
          query = QueryService.process(query);

          QueryService.save(query).then(function () {
            toastr.success('search saved');
          });
        };
      }
    };
  });
