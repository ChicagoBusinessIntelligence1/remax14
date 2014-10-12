'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase, $stateParams) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {},
      link: function ($scope, element, attr) {
        var mls = $stateParams.mls;
        var houseRepo = 'https://remax14.firebaseio.com/houses/' + mls;

        $scope.house = $firebase(new Firebase(houseRepo)).$asObject();

        $scope.updateHouse = function (sectionTitle, sectionContent) {
          //when click on button
          $scope.house[sectionName] = section;
          $scope.house.$save();
        };
      }
    };
  });
