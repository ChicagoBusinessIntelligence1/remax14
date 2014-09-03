'use strict';

var app = angular.module('app', ['firebase', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: '../partials/main.html'
      })
      .state('app.home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: '../partials/home.html'
      })
      .state('app.about', {
        url: '/about',
        controller: 'AboutCtrl',
        templateUrl: '../views/about.html'
      })
      .state('app.contact', {
        url: '/contact',
        controller: 'ContactusCtrl',
        templateUrl: '../views/contactus.html'
      })
      .state('app.admin', {
        url: '/admin',
        controller: 'LoginCtrl',
        templateUrl: '../views/login.html'
      })

//#state
  });


app.value('url', 'https://fengshui2.firebaseio.com/');

