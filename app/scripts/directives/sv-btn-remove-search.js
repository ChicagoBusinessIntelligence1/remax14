'use strict';

angular.module('app')
  .directive('svBtnRemoveSearch', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-btn-remove-search.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
