'use strict';

angular.module('app')
  .directive('svUserInfoForm', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-user-info-form.html',
      scope: {
        fname: '=',
        lname: '=',
        email: '=',
        phone: '='
      },
      link: function ($scope, element, attr) {
        $scope.updateProfileInfo = function (fname, lname, email, phone) {
          toastr.success('You changes have been successfully saved');
        };
        $scope.deleteProfile = function () {
          toastr.success('You profile was successfully deleted');
        };
        var deleteProfilePopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/delete-account-popover.html',
          placement: 'bottom',
          animation: 'am-flip-x',
          scope: $scope
        });
      }
    };
  });
