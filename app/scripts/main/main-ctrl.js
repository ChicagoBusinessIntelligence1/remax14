'use strict';

angular.module('app')
    .controller('MainCtrl', function ($scope, $firebase, url, $firebaseSimpleLogin) {
        // now we can use $firebase to synchronize data between clients and the server!
        var mainRef = new Firebase(url);
        $scope.auth = $firebaseSimpleLogin(mainRef);

        $scope.auth.$getCurrentUser().then(function (user) {
            if (!_.isNull(user)) {
                $scope.email = user.email;
                $scope.userLink = user.thirdPartyUserData.link;
                $scope.userName = user.thirdPartyUserData.first_name;
                $scope.userPic = user.thirdPartyUserData.picture.data.url;
            }
        })

        $scope.fenLogout = function () {
            $scope.auth.$logout();
            console.log('No current user');
        }

        $scope.loginFb = function () {
            $scope.auth.$login('facebook',
                {
                    rememberMe: true,
                    scope: 'email,user_likes'
                }
            ).then(function (user) {
                    $scope.userLink = user.thirdPartyUserData.link;
                    $scope.userName = user.thirdPartyUserData.first_name;
                    $scope.userPic = user.thirdPartyUserData.picture.data.url;
                });
        }
    });
