'use strict';

angular.module('app')
    .factory('authService', function () {
        var loggedUser;
        return {
            getUser: function () {
                return loggedUser;
            },
            setUser: function (user) {
                loggedUser = user;
            }
        };
    });
