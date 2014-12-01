'use strict';

angular.module('app')
  .directive('svSelectedProperty', function ($firebase, urlCommon) {
    return {
      templateUrl: '../views/directives/sv-selected-property.html',
      restrict: 'E',

      link: function ($scope, element, attrs) {
        var repoHouses = url + 'houses';
        $scope.houses = $firebase(new Firebase(repoHouses)).$asArray();
      }
    };
  });

