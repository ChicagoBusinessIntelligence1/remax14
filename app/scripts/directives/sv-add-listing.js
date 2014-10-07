'use strict';

angular.module('app')
  .directive('svAddListing', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-add-listing.html',
      scope: {

      },
      link: function ($scope, element, attr) {
        $scope.isSaved=false;

        $scope.saveDescription = function () {

        };
      }
    };
  });
