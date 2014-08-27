'use strict';

angular.module('fengshui')
    .controller('LoginCtrl', function ($scope, $firebaseSimpleLogin) {
        $scope.loginError = false;

        $scope.fenLogin = function (email, pass) {

            if (_.isEmpty(email) || _.isEmpty(pass)) {
                $scope.loginError = true;
                return;
            }

        };
    });
