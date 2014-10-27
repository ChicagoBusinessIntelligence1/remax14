'use strict';

angular.module('app')
  .directive('svCustomerInfoForm', function (UserService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-customer-info-form.html',
      scope: {},
      link: function ($scope, element, attr) {
        UserService.getUserData($rootScope.user.id).$loaded(function (savedUser) {
          var tuser = $rootScope.user.thirdPartyUserData;

          if (savedUser.$value === null) {
            $scope.customer = {
              userName: tuser.first_name + ' ' + tuser.last_name,
              fname: tuser.first_name,
              lname: tuser.last_name,
              email: tuser.email,
              phone: ''
            };
          }

        })
        $scope.updateProfileInfo = function (uName, fName, lName, email, phone) {
          toastr.success('You changes have been successfully saved');
        };
      }
    };
  });
