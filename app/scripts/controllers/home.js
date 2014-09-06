'use strict';

angular.module('app')
    .controller('HomeCtrl', function ($scope, url, $firebase) {

        var repo = url + 'posts';
        $scope.posts = $firebase(new Firebase(repo)).$asArray();

        $scope.addComment = function (postId, comment, user) {
            var commentsUrl = repo + '/' + postId + '/comments';
            $scope.comments = $firebase(new Firebase(commentsUrl)).$asArray();
            $scope.comments.$add({

              user: user,
                comment: comment,
                time: (new Date).getTime()
            })

        };
  });
