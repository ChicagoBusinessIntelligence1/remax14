'use strict';

angular.module('app')
  .controller('HomeSharedCtrl', function (HomesService, $scope, $firebase, $rootScope) {
    HomesService.findBrokerHomes($rootScope.user.id).then(function (myHomes) {
      $scope.brokerHomes = myHomes;
    })
  });
