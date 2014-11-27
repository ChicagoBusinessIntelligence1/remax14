'use strict';

angular.module('app')
  .controller('BrokerApplicationsCtrl', function ($scope,BrokerApplicationService) {

    BrokerApplicationService.all().then(function (brokerReqs) {
      $scope.requests = brokerReqs;

    });

    $scope.approveBroker = function (applicant) {

      BrokerApplicationService.approve(applicant).then(function () {
        toastr.success('Broker request approved');
      })

    };
    $scope.rejectBroker = function(applicant) {

      BrokerApplicationService.reject(applicant).then(function () {
        toastr.warning('Broker request rejected');
      })
    }
  });
