'use strict';

angular.module('app')
    .directive('svAddPostModal', function ($modal) {
        return {
            restrict: 'E',
            scope: {},
            template: '<button ng-click="showModal()" class="btn btn-link"><i class="fa fa-pencil"></i> Add New Post</button>',
            link: function postLink($scope, element, attrs) {
                var postModal = $modal(
                    {
                        title: 'Add new Post',
                        animation: 'am-fade-and-slide-top',
                        template: '../../views/modals/sv-add-article.html',
                        show: false
                    });
                $scope.showModal = function () {
                    postModal.show();
                }
            }
        };
    });
