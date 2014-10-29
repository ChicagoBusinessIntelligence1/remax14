'use strict';

angular.module('app')
  .directive('svHomesList', function (pageHomesNumber) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-homes-list.html',
      scope: {
        homes: '='
      },
      link: function ($scope, element, attr) {

        $scope.pageHomesNumber = pageHomesNumber;
        $scope.currentPage = 1;
        $scope.totalPages = Math.ceil($scope.homes.length / pageHomesNumber);
        $scope.isDataLoading = false;
      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
