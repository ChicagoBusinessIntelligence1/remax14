'use strict';

angular.module('app')
  .directive('svShareProperty', function ($popover, notifications, $location) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-sm btn-draft" data-toggle="tooltip" data-placement="left" title="{{shareHomeTitle}}">' +
      '<i class="fa fa-share-alt fa-fw"></i>' +
      '</button>',
      scope: {
        sharedUrl: '@'
      },

      link: function ($scope, element, attr) {
        $scope.shareHomeTitle = notifications.shareHomeTitle;
        $scope.sharedHomeFbTitle = notifications.sharedHomeFbTitle;
        $scope.shareHome = function (fName, lName, email) {
          toastr.success(notifications.sharedHomeFbTitle);
        };
        var sharePropertyPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/share-property-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $scope
        });
      }
    };
  });
