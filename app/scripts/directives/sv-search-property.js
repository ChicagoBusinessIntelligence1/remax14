'use strict';

angular.module('app')
  .directive('svSearchProperty', function ($state, $rootScope) {
    return {
      templateUrl: '../views/directives/sv-search-property.html',
      restrict: 'E',
      link: function ($scope, element, attrs) {
        $scope.query = {
          location: '',
          priceMin: '',
          priceMax: '',
          bedrooms: '',
          bathrooms: ''
        };
        $scope.mainSearch = function () {
          $rootScope.$broadcast('search', $scope.query);

          $state.go('app.search-results')
        };
      }

    };
  });
