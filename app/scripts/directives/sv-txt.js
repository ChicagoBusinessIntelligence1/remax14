'use strict';

angular.module('app')
  .directive('svTxt', function (urlCommon, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      template: '<div ng-form="{{nameId+\'Form\'}}" class="form-group txt-group">' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value" ng-if="isText && isTypesHeaded" typeahead="hint.abbreviation as hint.name for hint in hints|filter:$viewValue|limitTo:8"  type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value" ng-if="isText && isTypesHeaded" typeahead="hint.abbreviation as hint.name for hint in hints|filter:$viewValue|limitTo:8"  type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value" ng-if="isText && !isTypesHeaded"   type="text" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<input ng-class="{error:isMaxInvalid}" ng-model="model.value"  ng-if="!isText" sv-only-numbers type="number" name="{{nameId}}" id="{{nameId}}" class="form-control" ng-required="r" /> ' +
      '<span ng-show="isMaxInvalid" class="notice ng-hide error-note">Maximum {{max}} exceeded</span>' +
      '<span ng-show="r && isRequiredInvalid" class="notice error-note">Required</span>' +
      '</div>',
      scope: {
        maxLen: '=',
        sectionProperty: '=',
        r: '='
      },
      link: function ($scope, element, attr) {
        var title = $scope.sectionProperty.title;
        $scope.isTypesHeaded = title === 'state';

        if ($scope.isTypesHeaded) {
          var repo = urlCommon.residentialSettings + title + 's';
          $scope.states = [];
          $scope.hints = $firebase(new Firebase(repo)).$asArray();
          $scope.hints.$loaded(function () {
            angular.forEach($scope.hints, function (hint) {
              $scope.states.push(hint.abbreviation);
            })
          });

        }

        $scope.isMaxInvalid = false;
        $scope.isRequiredInvalid = false;
        $scope.max = (!!$scope.maxLen) ? $scope.maxLen : 150;

        $scope.$watch('model.value', function (newValue) {
          if (_.isUndefined(newValue) || _.isNull(newValue)) {
            $scope.isMaxInvalid = false;
            $scope.isRequiredInvalid = true;
            return;
          }
          if (!_.isUndefined(newValue)) {
            $scope.isRequiredInvalid = false;
          }
          if (newValue.length > $scope.max) {
            $scope.isMaxInvalid = true;
          }

          if (newValue.length <= $scope.max) {
            $scope.isMaxInvalid = false;
          }
        })
        $scope.isText = $scope.sectionProperty.title !== 'price';

        $scope.model = $scope.sectionProperty;
        $scope.nameId = _.str.camelize($scope.sectionProperty.title.split(' ').join('-').toLowerCase());
      }
    };
  });
