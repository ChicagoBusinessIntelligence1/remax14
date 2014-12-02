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
          api_user: 'remax14',
          api_key: 'R1eKefo9ApTh',
          fromname: $rootScope.user.name,
          first_name: $rootScope.user.first_name,
          last_name: $rootScope.user.last_name,
          to_name: 'Svitlana',
          to: "chicagobusinessintelligence1@gmail.com",
          from: 'chicagobusinessintelligence2@live.com',
          subject: 'Test',
          body: 'Bdoy'
        }
        $scope.sendMessage = function () {
          var url = 'https://api.sendgrid.com/api/mail.send.json';
          var data = 'api_user=' + $scope.email.api_user + '&api_key=' + $scope.email.api_key + '&to=' + $scope.email.to + '&toname=' + $scope.email.to_name + '&subject=' + $scope.email.subject + ' &text=' + $scope.email.body + '&from=' + $scope.email.from + '&fromname=' + $scope.email.fromname
          var sendgrid  = require('sendgrid')($scope.email.api_user, $scope.email.api_key);

          toastr.success(notifications.contactMessageSent);
        };
      }
    };
  });
