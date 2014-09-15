'use strict';

angular.module('app')
  .controller('LoginCtrl', function ($scope, url, $firebaseSimpleLogin, $state) {
        $scope.loginError = false;
        $scope.email = {data: 'admin@gmail.com'};
        $scope.pass = {data: '123456'};

        $scope.fenLogout = function () {
            $scope.auth.$logout();
                console.log('No current user');
        };
    });
