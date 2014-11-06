'use strict';

angular.module('app')
  .directive('svBtnNotifications', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-user" name="toggleNotifications" title="Notifications" id="toggleNotifications"><i class="fa fa-bell fa-fw"></i> </button>',
      link: function ($scope, element, attr) {
        var btnNotificationsPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/notifications-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $scope
        });
      }
    };
  });
