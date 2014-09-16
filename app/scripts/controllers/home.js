'use strict';

angular.module('app')
  .controller('HomeCtrl', function ($scope, url, $firebase) {

    var repo = url + 'posts';
    $scope.posts = $firebase(new Firebase(repo)).$asArray();

    $scope.addComment = function (postId, comment, userName, userPic,userLink) {
      var commentsUrl = repo + '/' + postId + '/comments';
      $scope.comments = $firebase(new Firebase(commentsUrl)).$asArray();
      if (_.isUndefined(userLink)) {
       userLink='#' ;
      }
      $scope.comments.$add({
        comment: comment,
        userName: userName,
        userPic: userPic,
        userLink: userLink,
        time: (new Date).getTime()
      })
    };
  });
