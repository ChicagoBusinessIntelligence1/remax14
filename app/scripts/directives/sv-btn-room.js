'use strict';

angular.module('app')
  .directive('svBtnRoom', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-primary btn-sm" name="{{nameId}}" id="{{nameId}}">{{titleCap}}</button>',
      scope: {},

      link: function ($scope, element, attr) {
        $scope.titleCap = $scope.title.charAt(0).toUpperCase() + $scope.title.slice(1);
        $scope.nameId = $scope.title.split(' ').join('-').toLowerCase();
      }
    };
  });
