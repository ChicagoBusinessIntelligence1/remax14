'use strict';

angular.module('app')
  .directive('svSaveSearch', function (QueryService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.isRunFromSaved = false;
        $scope.$on('run-saved-search', function () {
          $scope.isRunFromSaved = true;
        });

        $scope.isQueryEmpty = (_.pluck($rootScope.query, 'location', 'priceMin', 'priceMax', 'bedrooms', 'bathrooms')).length === 0;
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
