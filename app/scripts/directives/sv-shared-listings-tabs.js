'use strict';

angular.module('app')
  .directive('svSharedListingsTabs', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-shared-listings-tabs.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
