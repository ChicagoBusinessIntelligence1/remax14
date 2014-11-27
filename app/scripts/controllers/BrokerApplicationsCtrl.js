'use strict';

angular.module('app')
  .controller('BrokerApplicationsCtrl', function ($scope,BrokerApplicationService) {

    BrokerApplicationService.all().then(function (brokerReqs) {
      $scope.requests = brokerReqs;

    });

    $scope.approveBroker = function (applicant) {

      BrokerApplicationService.approve(applicant)

    };
    $scope.rejectBroker = function(applicant) {

    }
  });
