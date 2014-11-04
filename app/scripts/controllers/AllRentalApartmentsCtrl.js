'use strict';

angular.module('app')
  .controller('AllRentalApartmentsCtrl', function (homes, $scope) {
    $scope.homes = homes;
    $scope.isRent = true;

  });
