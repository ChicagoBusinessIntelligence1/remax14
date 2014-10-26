'use strict';

angular.module('app')
    .directive('svLogin', function () {
        return {
            templateUrl: '../views/directives/sv-login.html',
            restrict: 'E',
          controller: function ($scope, url, $firebaseSimpleLogin, $state) {
                $scope.fenLogin = function (email, pass) {
                    if (_.isEmpty(email) || _.isEmpty(pass)) {
                        $scope.loginError = true;
                        return;
                    }

                    $scope.auth.$login('password', {
                        email: email,
                        password: pass
                    }).then(function (user) {

                        // Sucess

                        $state.go('app.home');
                        $scope.loginError = false;

                    }, function () {
                        //Error
                        $scope.loginError = true;

                    });
                };
            }
        };
    });
