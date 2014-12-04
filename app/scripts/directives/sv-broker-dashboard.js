'use strict';

angular.module('app')
  .directive('svBrokerDashboard', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-user" name="toggleBrokerDashboard" id="toggleBrokerDashboard"> Broker Dashboard </button>',
      link: function ($scope, element, attr) {
        var broerDashboardPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/broker-dashboard-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $scope
        });
      }
    };
  });
