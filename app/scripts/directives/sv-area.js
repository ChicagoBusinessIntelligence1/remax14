'use strict';

angular.module('app')
  .directive('svArea', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      '<textarea ng-class="{error:isMaxInvalid}" ng-model="house[label]" type="text" name="{{nameId}}" id="{{nameId}}" rows="10" class="form-control"  ng-required="r" ></textarea>' +
      '</div>',
      scope: {
        house: '=',
        label: '@',
        placeholder: "@",
        maxLen: '=',
        r: '='
      },
      link: function ($scope, element, attr) {


        $scope.isMaxInvalid = false;

        $scope.max = (!!$scope.maxLen) ? $scope.maxLen : 500;

        $scope.$watch('area.val', function (newValue) {
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
