'use strict';

angular.module('app')
  .directive('svPostEdit', function ($popover, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      template: '<i class="fa fa-edit color-edit pull-right"></i>',
      scope: {
        post: '=',
        postKey: '='
      },
      link: function postLink($scope, element, attrs) {
        $scope.postEditPopover = $popover(element, {
          scope: $scope,
          placement: 'left',
          template: '../../views/popover/sv-post-popover.html'
        });

        $scope.savePost = function (newPost) {
          var repo = url + 'posts';
          var postUrl = repo + '/' + $scope.postKey;
          $firebase(new Firebase(postUrl)).$update({body: newPost}).then(function () {
            $scope.postEditPopover.hide();
            toastr.info('post has been updated');
          })
        };
      }
    };
  });
