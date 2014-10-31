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
        if ($scope.homes) {

        $scope.totalPages = Math.ceil($scope.homes.length / pageHomesNumber);
        } else{
        $scope.totalPages = 1;

        }
        $scope.isDataLoading = false;
      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
