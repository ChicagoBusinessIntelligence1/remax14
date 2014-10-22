'use strict';

angular.module('app')
  .directive('svSearchProperty', function () {
    return {
      templateUrl: '../views/directives/sv-search-property.html',
      restrict: 'E',
      link: function ($scope, element, attrs) {
        $scope.search = {
          location: '',
          priceMin: '',
          priceMax: '',
          bedrooms: '',
          bathrooms: ''
        };
        $scope.mainSearch = function (search) {
          console.log(search);
        };
      }

    };
  });
