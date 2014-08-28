'use strict';

angular.module('fengshui')
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
