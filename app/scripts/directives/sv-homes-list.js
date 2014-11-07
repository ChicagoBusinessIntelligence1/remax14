'use strict';

angular.module('app')
  .directive('svHomesList', function (pageHomesNumber, $filter) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-homes-list.html',
      scope: {
        homes: '=',
        isRent: '='
      },
      controller: function ($scope) {
        this.isRent = $scope.isRent;
      },
      link: function ($scope, element, attr) {
        var orderBy = $filter('orderBy');
        $scope.pageHomesNumber = pageHomesNumber;
        $scope.currentPage = 1;
        $scope.totalPages = Math.ceil($scope.homes.length / pageHomesNumber);
        $scope.isDataLoading = false;

        $scope.sortBy = 'date';

        $scope.$watch('sortBy', function (sortParam, oldValue) {
          switch (sortParam) {
            case 'date':
              $scope.setSortDate();
              break;
            case 'priceLow':
              $scope.setSortPrice(false);
              break;
            case 'priceHigh':
              $scope.setSortPrice(true);
              break;
          }
        });

        $scope.setSortPrice = function (reverse) {
          $scope.homes = orderBy($scope.homes, function (home) {
            return home[0].price;
          }, reverse);
        };
        $scope.setSortDate = function () {
          $scope.homes = orderBy($scope.homes, function (home) {
            return home[0].date;
          });
        };

        $scope.date = function (home) {
          return home[0].date;
        };

        $scope.priceLow = function (home) {
          return home[0].price;
        };
      }
    };
  });
