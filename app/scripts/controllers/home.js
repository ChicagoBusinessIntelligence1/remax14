'use strict';

angular.module('app')
  .controller('HomeCtrl', function ($scope, url, $firebase) {

    var repo = url + 'posts';
    $scope.posts = $firebase(new Firebase(repo)).$asArray();

    $scope.addComment = function (postId, comment, userName, userPic) {
      var commentsUrl = repo + '/' + postId + '/comments';
      $scope.comments = $firebase(new Firebase(commentsUrl)).$asArray();
      $scope.comments.$add({

        comment: comment,
        userName: userName,
        userPic: userPic,
        time: (new Date).getTime()
      })

    };
  });
