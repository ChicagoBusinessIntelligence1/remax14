'use strict';

angular.module('app')
  .directive('svLinkUserProfile', function ($popover, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-user" name="toggleUserProfile" id="toggleUserProfile"> Hello, {{userName}}! </button>',
      scope: {
        user: '=',
        userName: '@',
        logoutFb: '&'
      },
      link: function ($scope, element, attr) {

        var userProfilePopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/user-profile-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $rootScope
        });
      }
    };
  });
