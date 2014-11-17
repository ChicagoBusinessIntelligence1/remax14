'use strict';

angular.module('app')
  .directive('svNewListings', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-new-listings.html',
      link: function ($scope, element, attr) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Timer = $famous['famous/utilities/Timer'];
        var Easing = $famous['famous/transitions/Easing'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.scrollHandler = new EventHandler();
        $scope.loading = false;

      }
    };
  });
