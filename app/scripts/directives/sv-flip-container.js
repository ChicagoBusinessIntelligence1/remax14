'use strict';

angular.module('app')
  .directive('svFlipContainer', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-flip-container.html',
      scope: {},
      controller: function ($scope) {
        /*method that accepts computed params width and height from sv-home-panel and
         * depending on bool var bothShown, defines whether to show switcher for sale/rent */
        this.changeSplitDisplay = function (bothShown, width, height) {
          $scope.bothShown = bothShown;
          $scope.w = width;
          $scope.h = height / 5;
        };
      },
      link: function ($scope, element, attr) {
        var EventHandler = $famous['famous/core/EventHandler'];

        var data = [];
        data.push( {id: 0, name: 'zero', position: [10, 100], handler: new EventHandler() } );
        data.push( {id: 1, name: 'one',  position: [10, 200], handler: new EventHandler() } );
        data.push( {id: 2, name: 'two',  position: [10, 300], handler: new EventHandler() } );

        $scope.nodes = data;
        console.log($scope.nodes);

        $scope.remove = function() {
          $scope.nodes.splice(0, 1);
          console.log($scope.nodes);
        }
      }
    };
  });
