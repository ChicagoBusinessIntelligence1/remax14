'use strict';

angular.module('app')
  .directive('svCheckbox', function () {
    return {
      restrict: 'E',
      replace: true,
      template:
      '<ul class="list-unstyled">' +
      '<li><h5>{{titleCap}}:</h5></li>' +
      '<li><input type="checkbox" name="{{nameId}}" id="{{nameId}}"/>' +
      '</li>' +
      '</ul>',
      scope: {
        title: '@'
      },
      link: function ($scope, element, attr) {
        $scope.titleCap = $scope.title.charAt(0).toUpperCase() + $scope.title.slice(1);
        $scope.nameId = $scope.title.split(' ').join('-').toLowerCase();
      }
    };
  });
