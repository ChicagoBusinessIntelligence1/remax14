'use strict';

angular.module('fengshui')
    .controller('LoginCtrl', function ($scope, url, $firebaseSimpleLogin, $state, authService) {
        $scope.loginError = false;
        $scope.email = {data: 'admin@gmail.com'};
        $scope.pass = {data: '123456'};
        $scope.fenLogin = function (email, pass) {
            if (_.isEmpty(email) || _.isEmpty(pass)) {
                $scope.loginError = true;
                return;
            }

            $scope.auth.$login('password', {
                email: email,
                password: pass
            }).then(function (user) {
                console.log('Current user is: ' + user.email);

                // Sucess
                authService.setUser(user);

                $scope.loginError = false;

            }, function () {
                //Error
                $scope.loginError = true;

            });
        };

        $scope.fenLogout = function () {
            $scope.auth.$logout();
                console.log('No current user');
        }
    });
