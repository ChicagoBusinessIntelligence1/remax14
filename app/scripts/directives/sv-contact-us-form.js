'use strict';

angular.module('app')
  .directive('svContactUsForm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-contact-us-form.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
