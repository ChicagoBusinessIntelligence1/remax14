'use strict';

angular.module('app')
  .controller('ListingSharedCtrl', function (ListingsService, $scope, $firebase, $rootScope) {
    ListingsService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;
    })
  });
