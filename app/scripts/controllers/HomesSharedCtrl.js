'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope, $templateCache) {
    BrokerHomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;

       $scope.tabs = [
        {title:'Sale', page: 'views/tabs/saleTypes/sale.html'},
        {title:'Rent', page: 'views/tabs/saleTypes/rent.html'}
      ];
      $scope.tabs.activeTab=0;
    })
  });
