'use strict';

angular.module('app')
  .directive('svEmailAlertSettings', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-block">Email Alert Settings</button>',
      scope: {
        fname: '=',
        lname: '=',
        email: '='
      },
      link: function ($scope, element, attr) {
        $scope.saveEmailAlertSettings = function (fname, lname, email) {
          toastr.success('Your settings are successfully saved');
        };
        var emailAlertPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/email-alert-popover.html',
          placement: 'bottom',
          animation: 'am-flip-x',
          scope: $scope
        });
      }
    };
  });
