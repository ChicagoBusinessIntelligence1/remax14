'use strict';

var fengshui = angular.module('fengshui', ['firebase', 'ui.router','mm.foundation'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            }).
            state('about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: '../views/about.html'
            }).
            state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: '../views/login.html'
            });

        $urlRouterProvider.otherwise('/');
    });

fengshui.value();

