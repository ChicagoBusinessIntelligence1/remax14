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
        $scope.isMaxInvalid = false;
        $scope.max = (!!$scope.maxLen) ? $scope.maxLen : 150;

        $scope.$watch('model.value', function (newValue) {
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

        $scope.model = $scope.sectionProperty;
        $scope.nameId = _.str.camelize($scope.sectionProperty.title.split(' ').join('-').toLowerCase());
      }
    };
  });
