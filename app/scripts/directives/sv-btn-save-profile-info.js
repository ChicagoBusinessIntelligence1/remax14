'use strict';

angular.module('app')
  .directive('svBtnSaveProfileInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      template:
      '<button ng-click="saveProfileInfo()" class="btn btn-info btn-sm" ng-disabled="form.$invalid" name="saveProfileInfo" id="saveProfileInfo">' +
      '<i class="fa fa-save fa-fw"></i>' +
      'Save Changes' +
      '</button>',
      scope: {
        saveProfileInfo: '&'
      },
      link: function ($scope, element, attr) {
      }
    };
  });
