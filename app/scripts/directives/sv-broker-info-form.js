'use strict';

angular.module('app')
  .directive('svBrokerInfoForm', function (UserService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-broker-info-form.html',
      scope: {
        user: '='
      },
      link: function ($scope, element, attr) {
        $scope.isDataLoading = true;
        UserService.getProfile($rootScope.user.id).$loaded(function (savedUser) {
          var user;
          if (savedUser.$value === null) {
            user = $rootScope.user;
            $scope.isLocal = false;
          } else {
            $scope.isLocal = true;
            user = savedUser;
          }

          $scope.broker = {
            firstName: user.first_name,
            lastName: user.last_name,
            mls: '',
            website: '',
            email: user.email,
            phone: user.phone || ''
          };
          $scope.isDataLoading = false;
        });

        $scope.saveProfileInfo = function (broker) {
          if ($scope.form.$valid) {
            UserService.saveProfile(broker);
          } else {
            $rootScope.$broadcast('show-invalid-messages');
          }
        };
      }
    };
  });
