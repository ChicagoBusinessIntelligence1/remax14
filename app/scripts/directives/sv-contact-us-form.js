'use strict';

angular.module('app')
  .directive('svContactUsForm', function (notifications, $rootScope,$http) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-contact-us-form.html',
      scope: {
        user: '='
      },
      link: function ($scope, element, attr) {



        $scope.email={
          user:$rootScope.user,
          to:'',
          subject:'',
          body:''
        }
        $scope.sendMessage = function () {
         var url='https://api.sendgrid.com/api/mail.send.json' ;
          var data = 'api_user=remax14&api_key=R1eKefo9ApTh&to='+$scope.email.to+'&toname=test &subject='+email.subject+' &text='+$scope.email.body+' &from=remax14@gmail.com'
          $http.post(url, data);



          toastr.success(notifications.contactMessageSent);
        };
      }
    };
  });
