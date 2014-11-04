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

        $scope.mainSearch = function () {
          var nameType = $scope.isRent ? 'rent' : 'sale';

          var stateName = "app.search-" + nameType + "-results";
          $rootScope.query = $scope.query;

          if (_.isUndefined($scope.query)) {

            $state.go(stateName, null);

          } else {
            $state.go(stateName, {
                location: $scope.query.location,
                priceMin: $scope.query.priceMin,
                priceMax: $scope.query.priceMax,
                bedrooms: $scope.query.bedrooms,
                bathrooms: $scope.query.bathrooms
              },
              {reload: false}
            );

          }

        }
      }

    };
  });
