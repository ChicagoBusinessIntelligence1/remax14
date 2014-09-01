'use strict';

angular.module('app')
    .controller('MainCtrl', function ($scope, $firebase, url, $firebaseSimpleLogin) {
        // now we can use $firebase to synchronize data between clients and the server!
        var mainRef = new Firebase(url);
        $scope.auth = $firebaseSimpleLogin(mainRef);

        $scope.auth.$getCurrentUser().then(function (user) {
            if (!_.isNull(user)) {
                $scope.email = user.email;
            }
        })

        $scope.fenLogout = function () {
            $scope.auth.$logout();
            console.log('No current user');
        }
    });
