'use strict';

angular.module('app')
  .directive('svCommentPopover', function ($popover, $firebase, url) {
    return {
      restrict: 'E',
      scope: {
        comment: '=',
        postKey: '=',
        commentKey: '='
      },
      template: '<p class="comment editable"> {{comment}}</p>',
      link: function postLink($scope, element, attrs) {

        $scope.popoverEdit = $popover(element, {
          scope: $scope,
          placement: 'top',
          template: '../../views/directives/sv-comment-popover.html'
        });

        $scope.saveComment = function (comment) {
          var repo = url + 'posts';
          var commentsUrl = repo + '/' + $scope.postKey + '/comments/' + $scope.commentKey;
          $scope.comments = $firebase(new Firebase(commentsUrl));
          $scope.comments.$update({comment: comment}).then(function () {
            $scope.popoverEdit.hide();
            toastr.info('post has been updated');
          })
        };
      }
    };
  });
