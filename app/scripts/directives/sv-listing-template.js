'use strict';

angular.module('app')
  .directive('svListingTemplate', function ($firebase, urlResidentialTemp) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-template.html',
      scope: {},
      link: function ($scope, element, attr) {

        var houseTemp = urlResidentialTemp;
        $scope.house = $firebase(new Firebase(houseTemp)).$asObject();



      }
    };
  });
