'use strict';

angular.module('app')
  .directive('svCustomerProfileNav', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-customer-profile-nav.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
