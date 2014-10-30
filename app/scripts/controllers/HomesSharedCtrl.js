'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope) {
    BrokerHomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;

      $scope.tabs = [
        {
          title: 'Sale',
          view: 'views/tabs/saleRent/sale.html'
        },
        {
          title: 'Rent',
          view: 'views/tabs/saleRent/rent.html'
        }
      ];
    })
  });
