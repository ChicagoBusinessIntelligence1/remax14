'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService,$famous,$window) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        $scope.viewSize = {
          width:$window.innerWidth,
          height:$window.innerHeight
        }
        $scope.width=$window.innerWidth;
        HousesFrontImagesService.all().then(function (homes) {
          $scope.homes = homes;
        })
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.colors =  ['red', 'green', 'blue', 'orange', 'yellow'];
        $scope.getColor = function () {
          var index = Math.floor(Math.random()* 5);
          return $scope.colors[index];
        };
        $scope.handler = new EventHandler();
      }
    };
  });
