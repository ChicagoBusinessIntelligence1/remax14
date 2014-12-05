'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService,$famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        HousesFrontImagesService.all().then(function (homes) {
          $scope.homes = homes;
          console.log($scope.homes);
        })
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.handler = new EventHandler();
      }
    };
  });
