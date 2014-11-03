'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function (BrokerHomesService, $scope, $firebase, $rootScope) {
    $scope.homeStatus = 'active';
  });
