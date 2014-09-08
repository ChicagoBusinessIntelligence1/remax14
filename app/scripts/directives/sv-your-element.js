'use strict';

angular.module('app')
  .directive('svYourElement', function () {
    return {
      templateUrl: '../views/directives/sv-your-element.html',
      restrict: 'E',
      controller: function ($scope) {
        $scope.selectedIcon = "";
        $scope.icons = [{"value":"Мужской","label":"<i class=\"fa fa-male\"></i> Мужской"},{"value":"Женский","label":"<i class=\"fa fa-female\"></i> Женский"}];
      }
    };
  });

