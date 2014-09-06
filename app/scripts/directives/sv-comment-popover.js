'use strict';

angular.module('app')
  .directive('svCommentPopover', function ($popover) {
    return {
      restrict: 'E',
      scope: {
        comment: '='
      },
      template: '<p class="comment editable"> {{comment}}</p>',
      link: function postLink($scope, element, attrs) {
        var myPopover = $popover(element, {
          scope: $scope,
          placement: 'top',
          template: '../../views/directives/sv-comment-popover.html'
        });
      }
    };
  });
