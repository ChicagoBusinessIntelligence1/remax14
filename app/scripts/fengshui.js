'use strict';

var fengshui = angular.module('fengshui', ['firebase', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: '../partials/main.html'
            }).
            state('app.home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: '../partials/home.html'
            }).
            state('app.about', {
                url: '/about',
                controller: 'AboutCtrl',
                templateUrl: '../views/about.html'
            }).
            state('app.contact', {
                url: '/contact',
                controller: 'ContactusCtrl',
                templateUrl: '../views/contactus.html'
            }).
            state('app.login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: '../views/login.html'
            });

        $urlRouterProvider.otherwise('/');
    });


fengshui.value('url', 'https://fengshui2.firebaseio.com/');

