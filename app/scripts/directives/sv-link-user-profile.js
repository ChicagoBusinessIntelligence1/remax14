'use strict';

angular.module('app')
  .directive('svLinkUserProfile', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-user" name="toggleUserProfile" id="toggleUserProfile"> Hello, {{userName}}! </button>',
      link: function ($scope, element, attr) {

        var userProfilePopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/user-profile-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          animation: 'am-flip-x',
          scope: $scope
        });
      }
    };
  });
