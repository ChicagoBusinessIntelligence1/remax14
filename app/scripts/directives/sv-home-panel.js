'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService ) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        HousesFrontImagesService.all().then(function (images) {
          $scope.images = images;
        })

      }
    };
  });
