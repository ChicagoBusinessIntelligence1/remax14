'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope) {
    BrokerHomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;
    })
  });
