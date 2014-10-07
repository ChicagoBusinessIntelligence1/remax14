'use strict';

angular.module('app')
  .directive('svBtnSave', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      //'<button ng-click="save()" class="btn btn-info btn-sm" name="{{nameId}}" id="{{nameId}}">' +
      '<button ng-click="save()" class="btn btn-info btn-sm" ng-disabled="form.$invalid" name="{{nameId}}" id="{{nameId}}">' +
      '<i class="fa fa-save fa-fw"></i>' +
      '{{titleCap}}' +
      '</button>' +
      '</div>',
      scope: {
        form: '=',
        title: '@',
        save:'&'
      },

      link: function ($scope, element, attr) {
        $scope.titleCap = $scope.title.charAt(0).toUpperCase() + $scope.title.slice(1);
        $scope.nameId = $scope.title.split(' ').join('-').toLowerCase();
      }
    };
  });
