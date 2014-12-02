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
          user: $rootScope.user,
          from: '',
          subject: '',
          body: ''
        }
        $scope.sendMessage = function () {
          var url = 'https://api.sendgrid.com/api/mail.send.json';
          var data = 'api_user=remax14&api_key=R1eKefo9ApTh&to=' + '&to=chicagobusinessintelligence1@gmail.com' + '&toname=test &subject=' + $scope.email.subject + ' &text=' + $scope.email.body + '&from=' + $scope.email.from
          $http.post(url, data);

          toastr.success(notifications.contactMessageSent);
        };
      }
    };
  });
