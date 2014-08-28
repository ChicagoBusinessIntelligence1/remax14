'use strict';


angular.module('fengshui')
    .directive('svLogin', function () {
        return {
            templateUrl: '../views/directives/sv-login.html',
            restrict: 'E',
            controller: function ($scope, url, $firebaseSimpleLogin, $state, authService) {
                console.log("test");
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


                        $state.go('home');
                        $scope.loginError = false;

                    }, function () {
                        //Error
                        $scope.loginError = true;

                    });
                };
            }
        };
    });
