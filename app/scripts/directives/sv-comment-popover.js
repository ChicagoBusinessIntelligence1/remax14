'use strict';

angular.module('app')
  .directive('svCommentPopover', function ($popover, $firebase, url) {
    return {
      restrict: 'E',
      scope: {
        c: '=',
        postKey: '=',
        commentKey: '='
      },
      template: '<p class="comment editable p-comment"> {{c.comment}}</p>',
      link: function postLink($scope, element, attrs) {
        $scope.commentnew= {val:$scope.c.comment};
        $scope.popoverEdit = $popover(element, {
          scope: $scope,
          placement: 'top',
          template: '../../views/directives/sv-comment-popover.html'
        });

        $scope.saveComment = function () {
          var repo = url + 'posts';
          var commentsUrl = repo + '/' + $scope.postKey + '/comments/' + $scope.commentKey;
          $firebase(new Firebase(commentsUrl)).$update({comment: $scope.commentnew.val})
            .then(function () {
              $scope.popoverEdit.hide();
              toastr.info('post has been updated');
            })
        };
      }
    };
  });
