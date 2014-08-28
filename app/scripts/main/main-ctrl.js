/* global Firebase */

'use strict';

angular.module('fengshui')
    .controller('MainCtrl', function ($scope, $firebase, url, $firebaseSimpleLogin) {
        // now we can use $firebase to synchronize data between clients and the server!
        var mainRef = new Firebase(url);
        $scope.auth = $firebaseSimpleLogin(mainRef);

        $scope.auth.$getCurrentUser().then(function (user) {
            $scope.email = user.email;
        })
    });
