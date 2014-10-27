'use strict';

angular.module('app')
  .directive('svDelProfile', function ($popover) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-link btn-sm btn-delete-account"><i class="fa fa-remove"></i> Delete My Profile</button>',
      scope: {},
      link: function ($scope, element, attr) {

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
      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
