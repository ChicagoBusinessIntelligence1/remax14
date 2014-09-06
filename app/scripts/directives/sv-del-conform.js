'use strict';

angular.module('app')
    .directive('svDelConform', function ($popover, $firebase, url) {
        return {
            restrict: 'E',
            replace: true,
            template: '<i class="fa fa-times color-danger pull-right"></i>',
            scope: {
                postKey: '=',
                commentKey: '='
            },
            link: function postLink($scope, element, attrs) {

                var deletePopover = $popover(element, {
                    scope: $scope,
                    title: 'Remove Comment?',
                    placement: 'left',
                    template: '../../views/popover/popover-delete.html'
                });

                $scope.remove = function (key) {

                    var repo = url + 'posts';
                    var commentsUrl = repo + '/' + $scope.postKey + '/comments/' + $scope.commentKey;
                    $scope.comments = $firebase(new Firebase(commentsUrl));
                    $scope.comments.$remove();
                };
            }
        };
    });
