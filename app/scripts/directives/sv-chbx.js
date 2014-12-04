'use strict';

angular.module('app')
  .directive('svChbx', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value" ' +
      'type="checkbox" name="{{nameId}}" id="{{nameId}}" /></div>',
      scope: {
        sectionProperty: '=',
        r: '='
      },
      link: function ($scope, element, attr) {
        $scope.model = $scope.sectionProperty;
        $scope.nameId = _.str.camelize($scope.sectionProperty.title.split(' ').join('-').toLowerCase());
      }
    };
  });
