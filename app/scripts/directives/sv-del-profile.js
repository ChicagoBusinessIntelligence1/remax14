'use strict';

angular.module('app')
  .directive('svDelProfile', function ($popover, notifications) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-sm btn-delete-account"><i class="fa fa-remove"></i> Delete My Profile</button>',
      scope:{
        removeProfile:'&'
      },
      link: function ($scope, element, attr) {

        $scope.deleteProfile = function () {
          toastr.success(notifications.profileDeleted);
        };
        var deleteProfilePopover = $popover(element, {
          template: '../../views/popover/delete-account-popover.html',
          placement: 'bottom',
          scope: $scope
        });
      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
