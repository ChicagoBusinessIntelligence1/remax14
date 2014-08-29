'use strict';

var fengshui = angular.module('fengshui', ['firebase', 'ui.router', 'mm.foundation'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/main.html'
            }).
            state('about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: '../views/about.html'
            }).
            state('contact', {
                url: '/contact',
                controller: 'ContactusCtrl',
                templateUrl: '../views/contactus.html'
            }).
            state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: '../views/login.html'
            });

        $urlRouterProvider.otherwise('/');
    });


fengshui.value('url', 'https://fengshui2.firebaseio.com/');

