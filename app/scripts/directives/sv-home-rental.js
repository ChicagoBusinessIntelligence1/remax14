'use strict';

angular.module('app')
  .directive('svHomeRental', function ($stateParams, $state, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-rental.html',
      scope: {
        isDraft: '='
      },

      controller: function ($scope) {
        this.required = ['mls', 'state', 'city', 'zip'];
      },

      link: function ($scope, element, attr) {
        var mls = $stateParams.mls;

      }
    };
  });
