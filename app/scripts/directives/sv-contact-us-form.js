'use strict';

angular.module('app')
  .directive('svContactUsForm', function (notifications, $rootScope, $http) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-contact-us-form.html',
      scope: {
        user: '='
      },
      link: function ($scope, element, attr) {

        $scope.email = {
          fname: $rootScope.user.first_name,
          lname: $rootScope.user.last_name,
          from:$rootScope.user.email,
          subject: '',
          body: ''
        }
        $scope.sendMessage = function () {
          var url = 'http://localhost:3000/sendmail';
          var url = 'http://localhost:3000/sendmail';

          var data = {"to":"test"};
          $http.post(url, $scope.email).success(function () {
          toastr.success(notifications.contactMessageSent);

          })

        };
      }
    };
  });
