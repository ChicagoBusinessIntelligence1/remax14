'use strict';

angular.module('app')
  .directive('svTxt', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      '<label>{{titleCap}}:</label>' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="text.val" type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" />' +
      '<span ng-show="isMaxInvalid" class="notice ng-hide error-note">Maximum {{max}} exceeded</span>' +
      '<span ng-show="r && form.$dirty && !text.val.length" class="notice error-note">Required</span>' +
      '</div>',
      scope: {
        form: '=',
        title: '@',
        maxLen: '=',
        r: '='
      },
      link: function ($scope, element, attr) {
        $scope.isMaxInvalid = false;

        $scope.max = (!!$scope.maxLen) ? $scope.maxLen : 250;

        $scope.$watch('text.val', function (newValue) {
          if (_.isUndefined(newValue)) {
            $scope.isMaxInvalid = false;
            return;
          }

          if (newValue.length > $scope.max) {
            $scope.isMaxInvalid = true;
          }

          if (newValue.length <= $scope.max) {
            $scope.isMaxInvalid = false;
          }
        })
        $scope.titleCap = $scope.title.charAt(0).toUpperCase() + $scope.title.slice(1);
        $scope.nameId = $scope.title.split(' ')[0].toLowerCase();

      }
    };
  });
