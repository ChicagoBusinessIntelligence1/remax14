'use strict';

angular.module('app')
  .directive('svPagination', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-pagination.html',
      scope: {
        totalPages: '=',
        currentPage: '='
      },
      link: function ($scope, element, attr) {

        var arrayLength = parseInt($scope.totalPages);
        $scope.pages = [];
        for (var i = 1; i <= arrayLength; i++) {
          var pageButton = {id: i};
          $scope.pages.push(pageButton);
        }

      },
      controller: function ($scope) {
        $scope.setCurrentPage = function (currentPage) {
          $scope.currentPage = currentPage ;
        };
      }
    };
  });
