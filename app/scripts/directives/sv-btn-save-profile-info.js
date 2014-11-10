'use strict';

angular.module('app')
  .directive('svBtnSaveProfileInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      template:
      '<button ng-click="saveProfileInfo({form:form})" class="btn btn-info btn-sm"  name="saveProfileInfo" id="saveProfileInfo">' +
      '<i class="fa fa-save fa-fw"></i>' +
      'Save Changes' +
      '</button>',
      scope: {
        saveProfileInfo: '&',
        form: '='
      },
      link: function ($scope, element, attr) {
      }
    };
  });
