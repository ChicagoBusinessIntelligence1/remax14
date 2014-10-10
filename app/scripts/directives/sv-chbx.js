'use strict';

angular.module('app')
  .directive('svChbx', function () {
    return {
      restrict: 'E',
      replace: true,
      template:
      '<div class="form-group">' +
       '<input ng-class="{error:isMaxInvalid}" ng-model="house[title][label].value"  ' +
      'type="checkbox" name="{{nameId}}" id="{{nameId}}" /></div>',
      scope: {
        house:"=",
        title: '@',
        label: '@'
      },
      link: function ($scope, element, attr) {

      }
    };
  });
