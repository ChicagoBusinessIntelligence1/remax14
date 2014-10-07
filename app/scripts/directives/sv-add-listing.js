'use strict';

angular.module('app')
  .directive('svAddListing', function (url,$firebase) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-add-listing.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.isSaved = false;

        $scope.saveDescription = function () {
          var house = {};

          //Required field
          house.city = city.value;
          house.state = state.value;
          house.zip = zip.value;
          house.details = propertyDetails.value;

          if (street) {
            house.street = street.value;
          }

          var repo = url + 'houses';
          $scope.houses = $firebase(new Firebase(repo)).$asArray();

          $scope.houses.$add(house);
        };
      }
    };
  });
