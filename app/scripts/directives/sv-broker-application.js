'use strict';

angular.module('app')
  .directive('svBrokerApplication', function ($popover, notifications) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-block">Apply for Broker Account</button>',
      scope: {
        fName: '=',
        lName: '=',
        email: '='
      },
      link: function ($scope, element, attr) {
        $scope.submitBrokerApp = function (fName, lName, email) {
          toastr.success(notifications.brokerAppSubmitted);
        };
        var brokerPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/broker-application-popover.html',
          placement: 'bottom',
          scope: $scope
        });
      }
    };
  });
