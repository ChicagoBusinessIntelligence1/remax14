'use strict';

angular.module('app')
  .directive('svArea', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      '<textarea ng-class="{error:isMaxInvalid}" ng-model="model.value" type="text" name="{{nameId}}" id="{{nameId}}" rows="5" class="form-control"  ng-required="r" ></textarea>' +
      '</div>',
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
