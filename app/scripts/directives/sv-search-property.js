'use strict';

angular.module('app')
  .directive('svSearchProperty', function ($state, $rootScope) {
    return {
      templateUrl: '../views/directives/sv-search-property.html',
      restrict: 'E',
      scope: {
        isRent: '='
      },
      link: function ($scope, element, attrs) {

        console.log($scope.isRent);

        $scope.mainSearch = function () {
          var nameType = $scope.isRent ? 'rent' : 'sale';

          var stateName = "app.search-" + nameType + "-results";
          console.log(stateName);
          $rootScope.query = $scope.query;

          if (_.isUndefined($scope.query)) {
            $scope.query = {
              location: ''
            };

          }
          $state.go(stateName, {
            location: $scope.query.location,
            priceMin: $scope.query.priceMin,
            priceMax: $scope.query.priceMax,
            bedrooms: $scope.query.bedrooms,
            bathrooms: $scope.query.bathrooms
          });

        };
      }

    };
  });
