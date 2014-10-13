'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase, $stateParams, urlResidential) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {},
      link: function ($scope, element, attr) {
        /*take param mls from browser url using stateParams*/
        var mls = $stateParams.mls;
        /*Firebase string reference*/
        var houseRepo = urlResidential + mls;

        $scope.house = $firebase(new Firebase(houseRepo)).$asObject();

        $scope.updateHouse = function (sectionTitle, sectionContent) {
          //when click on button
          $scope.house[sectionTitle] = sectionContent;
          $scope.house.$save();
        };
      }
    };
  });
