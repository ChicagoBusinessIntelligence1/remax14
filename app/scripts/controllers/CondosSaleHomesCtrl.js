'use strict';

angular.module('app')
  .controller('CondosSaleHomesCtrl', function (TypeHomesService, $scope) {
    TypeHomesService.getCondos().then(function (condos) {
      $scope.homes = condos;
    })
  });
