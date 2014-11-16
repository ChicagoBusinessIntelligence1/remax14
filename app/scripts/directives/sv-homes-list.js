'use strict';

angular.module('app')
  .directive('svHomesList', function (pageHomesNumber, $filter, $famous) {
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
        window.s = $scope;
      },
      link: function ($scope, element, attr) {
        $scope.myGridLayoutOptions = {
          dimensions: [1,4], // specifies number of columns and rows
        };
        $scope.grids = [{bgColor: "orange"}, {bgColor: "red"}, {bgColor: "green"}, {bgColor: "yellow"}];
        var _scales = {}

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.boxTransitionable = new Transitionable([0, 0, 0]);
        $scope.scrollHandler = new EventHandler();
        $scope.animate = function () {
          $scope.boxTransitionable.set([200, 300, 0], {duration: 2000, curve: Easing.inOutBack});
        };

        $scope.homes = _.map($scope.homes, function (home) {
          var scale = new Transitionable([.001, .001, .001]);
          var opacity = new Transitionable(0);
          return _.extend(home, {
            scale: scale,
            opacity:opacity
          })
        })

        $scope.getScale = function(i){
          if(!_scales[i]) return [1, 1, 1];
        }

        $scope.cubeEnter = function (home, $done) {
          home.scale.set([1, 1, 1], {duration: 1000, curve: Easing.outElastic});
          home.opacity.set(1, {duration: 1250, curve: "linear"}, $done);
          $done();
        };

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
