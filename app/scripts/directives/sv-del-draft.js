'use strict';

angular.module('app')
  .directive('svDelDraft', function ($popover, notifications) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-sm btn-draft"><i class="fa fa-remove"  data-toggle="tooltip" data-placement="left" title="{{deleteDraftTitle}}"></i> </button>',
      scope: {
        draft: '=',
        removeDraft: '&',
        mls: '@'
      },
      link: function ($scope, element, attr) {

        $scope.deleteDraftTitle = notifications.deleteDraftTitle;
        var deleteDraftPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/delete-draft-popover.html',
          placement: 'bottom',
          scope: $scope
        });
      }
    };
  });
