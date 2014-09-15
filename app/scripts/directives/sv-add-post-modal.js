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
        $scope.post = {};

        var repo = url + 'elements';
        $scope.elements = $firebase(new Firebase(repo)).$asArray();
        $scope.elements.$loaded(function () {
        $scope.post.fenElementSelected = $scope.elements[0];
        })


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

        $scope.addPost = function (title, author, body, postElementSelected) {
          $scope.posts.$add(
            {
              title: title,
              fenelement:postElementSelected.$id,
              body: body,
              time: (new Date()).getTime()
            }).then(function () {
              $scope.post = {};
              $scope.post.fenElementSelected = $scope.elements[0];
              postModal.hide();
              toastr.info('The post has been submitted');

            });
        };

      }
    };
  });
