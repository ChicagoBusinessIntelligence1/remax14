'use strict';

angular.module('app')
  .directive('svBrokerApplication', function ($popover) {
    return {
      restrict: 'E',
      template: '<button class="btn btn-info">Apply for Remax 1st class Broker Account</button>',
      scope: {
        fname: '=',
        lname: '=',
        email: '='
      },
      link: function ($scope, element, attr) {
        $scope.submitBrokerApp = function (fname,lname,email) {
          toastr.success('You application has been successfully submited');
        };
        var brokerPopover = $popover(element, {
          template: '../../views/popover/broker-application-popover.html',
          scope:$scope
        });
      }
    };
  });
