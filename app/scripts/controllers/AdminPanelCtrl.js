'use strict';

angular.module('app')
  .controller('AdminPanelCtrl', function ($scope, BrokerApplicationService) {
   BrokerApplicationService.all().then(function (brokerReqs) {
     $scope.requests = brokerReqs;

   });

    $scope.approveBroker = function (email, id) {

      BrokerApplicationService.approve(email,id)

    };
    $scope.rejectBroker = function(email,id) {


    };
  });
