'use strict';

angular.module('app')
  .directive('svTxt', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group txt-group">' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value"  type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<span ng-show="isMaxInvalid" class="notice ng-hide error-note">Maximum {{max}} exceeded</span>' +
      '<span ng-show="r && !txt.val.length" class="notice error-note">Required</span>' +
      '</div>',
      scope: {
        house: "=",
        title: '@',
        label: '@',
        open: '=',
        isSaved: '=',
        form: '=',
        maxLen: '=',
        r: '='
      },
      link: function ($scope, element, attr) {

        $scope.model = $scope.house.$getRecord($scope.title)[$scope.label];
        $scope.$watch('model', function (newValue, oldValue) {
          if (newValue == oldValue) {
            return;
          }
          console.log($scope.house.$getRecord($scope.title)[$scope.label]);
          console.log($scope.title);
          console.log($scope.label);
          console.log($scope.model);
        });
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

        $scope.labelCap = $scope.label.charAt(0).toUpperCase() + $scope.label.slice(1);
        $scope.nameId = _.str.camelize($scope.label.split(' ').join('-').toLowerCase());
      }
    };
  });
