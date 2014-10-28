'use strict';

angular.module('app')
  .directive('svCustomerInfoForm', function ($rootScope, UserService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-user-info-form.html',
      scope: {
      },
      link: function ($scope, element, attr) {

      }
    };
  });
