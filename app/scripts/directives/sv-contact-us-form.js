'use strict';

angular.module('app')
  .directive('svContactUsForm', function (notifications, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-contact-us-form.html',
      scope: {
        user: '='
      },
      link: function ($scope, element, attr) {
        $scope.sendMessage = function () {
          toastr.success(notifications.contactMessageSent);
        };
      }
    };
  });
