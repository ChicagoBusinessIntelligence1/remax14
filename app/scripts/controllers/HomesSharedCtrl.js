'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope) {
    BrokerHomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;

      $scope.tabs2 = {
        'Sale': 'views/tabs/saleRent/sale.html',
        'Rent': 'views/tabs/saleRent/rent.html'
      };
    })
  });
