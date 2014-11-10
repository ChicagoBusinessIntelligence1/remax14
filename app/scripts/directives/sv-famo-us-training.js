'use strict';

angular.module('app')
  .directive('svFamoUsTraining', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-famo-us-training.html',
      link: function ($scope, element, attr) {

      }
    };
  });
