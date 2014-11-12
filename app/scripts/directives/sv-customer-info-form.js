'use strict';

angular.module('app')
  .directive('svCustomerInfoForm', function (UserService, $rootScope, CleanObjectService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-customer-info-form.html',
      scope: {
        user: '='
      },
      link: function ($scope, element, attr) {
        $scope.isDataLoading = true;
        $scope.myBroker = 'Hello';
        UserService.getProfile($rootScope.user.id).$loaded(function (savedUser) {
          var user;
          if (savedUser.$value === null) {
            user = $rootScope.user;
            $scope.customer = {
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              phone: ''
            }
            $scope.isLocal = false;
          } else {
            $scope.isLocal = true;
            $scope.customer = savedUser;
          }
          $scope.isDataLoading = false;
        });

        $scope.saveCustomerProfileInfo = function (customer, form) {
          if (form.$valid) {
            customer = CleanObjectService.clean(customer);
            UserService.saveProfile(customer);
          } else {
            $rootScope.$broadcast('show-invalid-messages');
          }
        };
      }
    };
  });
