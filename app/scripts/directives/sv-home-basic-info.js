'use strict';

angular.module('app')
  .directive('svHomeBasicInfo', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-basic-info.html',
      scope: {
        home: '='
      },
      require: '^sv-homes-list',
      link: function ($scope, element, attr, svRentalsCtrl) {
        $scope.isRent = svRentalsCtrl.isRent;

      }
    };
  });
