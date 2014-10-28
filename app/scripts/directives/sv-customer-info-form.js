'use strict';

angular.module('app')
  .directive('svCustomerInfoForm', function (UserService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-customer-info-form.html',
      scope: {},
      link: function ($scope, element, attr) {

        $scope.saveProfileInfo = function () {
          UserService.saveProfile($scope.customer);
        };
        $scope.isDataLoading = true;
        UserService.getProfile($rootScope.user.id).$loaded(function (savedUser) {
          var user;
          if (savedUser.$value === null) {
            user = $rootScope.user;
          } else {
            user = savedUser;
          }

          $scope.customer = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: ''
          };
        $scope.isDataLoading = false;
        });

      }
    };
  });
