'use strict';

angular.module('app')
  .directive('svBrokerInfoForm', function (UserService, $rootScope, CleanObjectService,BrokerProfileService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-broker-info-form.html',
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
            $scope.broker = {
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              website: '',
              mls: '',
              phone: ''
            }
            $scope.isLocal = false;
          } else {
            $scope.isLocal = true;
            $scope.broker = savedUser;
          }
          $scope.isDataLoading = false;
        });

        $scope.saveBrokerProfileInfo = function (broker, form) {
          if (form.$valid) {
            broker = CleanObjectService.clean(broker);
            UserService.saveProfile(broker);
          } else {
            $rootScope.$broadcast('show-invalid-messages');
          }
        };
        $scope.removeBrokerAccount = function () {
          BrokerProfileService.archiveListings();

        };
      }
    };
  });
