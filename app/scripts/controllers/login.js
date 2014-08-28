'use strict';

angular.module('fengshui')
    .controller('LoginCtrl', function ($scope, url, $firebaseSimpleLogin, $state, $rootScope) {
        $scope.loginError = false;

        $scope.fenLogin = function (email, pass) {
            if (_.isEmpty(email) || _.isEmpty(pass)) {
                $scope.loginError = true;
                return;
            }
            var mainRef = new Firebase(url);
            var auth = $firebaseSimpleLogin(mainRef);

            auth.$login('password', {
                email: email,
                password: pass
            }).then(function (user) {
                // Sucess
                $state.go('admin');
                $scope.loginError = false;

            }, function () {
                $scope.loginError = true;

            });


        };
    });
