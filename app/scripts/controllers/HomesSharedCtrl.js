'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope) {
    BrokerHomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.homes = myHomes;

      $scope.tabs = [
        {
          title: 'Property for Sale',
          view: 'views/tabs/saleRent/sale.html'
        },
        {
          title: 'Property for Rent',
          view: 'views/tabs/saleRent/rent.html'
        }
      ];
    })
  });
