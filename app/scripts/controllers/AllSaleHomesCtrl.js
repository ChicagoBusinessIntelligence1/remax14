'use strict';

angular.module('app')
  .controller('AllSaleHomesCtrl', function (TypeHomesService,$scope) {

    TypeHomesService.getCondos().then(function (condos) {
      $scope.homes = condos;
    })

  });
