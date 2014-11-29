'use strict';

angular.module('app')
  .controller('RegisteredBrokersCtrl', function (RegisteredBrokersService, $scope, notifications) {

    RegisteredBrokersService.all().then(function (brokers) {
      $scope.brokers = brokers;

      $scope.deleteBroker = function (broker) {
        RegisteredBrokersService.remove(broker.$id).then(function () {
          toastr.success(notifications.brokerInfoDeleted);
        })
      };
    })
  });

