'use strict';

angular.module('app')
  .directive('svTxt', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group txt-group">' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value" ng-if="isText"   type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value"  ng-if="!isText"  type="number" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<span ng-show="r && !model.value.length" class="notice error-note">Required</span>' +
      '</div>',
      scope: {
        sectionProperty: '=',
        r: '='
      },
      link: function ($scope, element, attr) {
        $scope.isText = $scope.sectionProperty.title !== 'price';

        $scope.model = $scope.sectionProperty;
        $scope.nameId = _.str.camelize($scope.sectionProperty.title.split(' ').join('-').toLowerCase());
      }
    };
  });
