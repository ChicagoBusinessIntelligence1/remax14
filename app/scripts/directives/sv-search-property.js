'use strict';

angular.module('app')
  .directive('svSearchProperty', function ($state, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../views/directives/sv-search-property.html',
      link: function ($scope, element, attrs) {
        $scope.mainSearch = function () {
          $rootScope.query = $scope.query;
          $state.go('app.search-results', null, {reload: true});
        };
        $scope.showAllSaleHomes = function () {
          $rootScope.query = undefined;
          $state.go('app.search-results', null, {reload: true});
        };
      }
    };
  });
