'use strict';

angular.module('app')
  .directive('svDeleteBrokerInfo', function ($popover, notifications) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-sm"><i class="fa fa-remove fa-fw"></i> Delete</button>',
      scope: {
        deleteBroker: '&'
      },
      link: function ($scope, element, attr) {
        var deleteBrokerInfo = $popover(element, {
          container: 'body',
          template: '../../views/popover/delete-broker-info-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $scope
        });
      }
    };
  });
