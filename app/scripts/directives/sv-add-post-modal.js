'use strict';

angular.module('app')
  .directive('svAddPostModal', function ($modal, $firebase, url) {
    return {
      restrict: 'E',
      scope: {
        posts: '='
      },
      template: '<button ng-click="showModal()" class="btn btn-link btn-link-dark"><i class="fa fa-pencil"></i> Добавить Пост</button>',
      controller: function ($scope) {

      },
      link: function postLink($scope, element, attrs) {

        var repo = url + 'elements';
        $scope.elements = $firebase(new Firebase(repo)).$asArray();

        $scope.post = {};

        var postModal = $modal(
          {
            scope: $scope,
            title: 'Добавить Пост',
            animation: 'am-fade-and-slide-top',
            template: '../../views/modals/sv-add-article.html',
            show: false
          });

        $scope.showModal = function () {
          postModal.show();
        };

        $scope.addPost = function (title, author, body) {
          $scope.posts.$add(
            {
              title: title,
              author: author,
              body: body,
              time: (new Date()).getTime()
            }).then(function () {
              $scope.post = {};
              postModal.hide();
              toastr.info('The post has been submitted');

            });
        };

      }
    };
  });
