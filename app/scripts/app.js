'use strict';

var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker'])
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
      .state('app.fire-personality', {
        url: '/fire-personality',
        controller: 'FirePersonality',
        templateUrl: '../views/fire-personality.html'
      })
      .state('app.hardwood-personality', {
        url: '/hardwood-personality',
        controller: 'HardwoodPersonality',
        templateUrl: '../views/hardwood-personality.html'
      })
      .state('app.softwood-personality', {
        url: '/softwood-personality',
        controller: 'SoftwoodPersonality',
        templateUrl: '../views/softwood-personality.html'
      })
      .state('app.water-personality', {
        url: '/water-personality',
        controller: 'WaterPersonality',
        templateUrl: '../views/water-personality.html'
      })
      .state('app.hardmetal-personality', {
        url: '/hardmetal-personality',
        controller: 'HardmetalPersonality',
        templateUrl: '../views/hardmetal-personality.html'
      })
      .state('app.softmetal-personality', {
        url: '/softmetal-personality',
        controller: 'SoftmetalPersonality',
        templateUrl: '../views/softmetal-personality.html'
      })
      .state('app.mountainearth-personality', {
        url: '/mountainearth-personality',
        controller: 'MountainearthPersonality',
        templateUrl: '../views/mountainearth-personality.html'
      })
      .state('app.motherearth-personality', {
        url: '/motherearth-personality',
        controller: 'MotherearthPersonality',
        templateUrl: '../views/motherearth-personality.html'
      })
      .state('app.secrets-fengshui', {
        url: '/secrets-fengshui',
        controller: 'SecretsFengshui',
        templateUrl: '../views/secrets-fengshui.html'
      })
      .state('app.fengshui-articles', {
        url: '/fengshui-articles',
        controller: 'FengshuiArticles',
        templateUrl: '../views/fengshui-articles.html'
      })
      .state('app.education', {
        url: '/education-fengshui',
        controller: 'Education',
        templateUrl: '../views/education.html'
      })
      .state('app.yin-yang', {
        url: '/yin-yang-fengshui',
        controller: 'YinYang',
        templateUrl: '../views/yin-yang.html'
      })
      .state('app.wu-xing-elements', {
        url: '/wu-xing-elements',
        controller: 'WuXingElements',
        templateUrl: '../views/wu-xing-elements.html'
      })
      .state('app.qi-energy', {
        url: '/qi-energy',
        controller: 'QiEnergy',
        templateUrl: '../views/qi-energy.html'
      })
      .state('app.bagua', {
        url: '/bagua-eight-trigrams',
        controller: 'Bagua',
        templateUrl: '../views/bagua.html'
      })
      .state('app.residential-consultations', {
        url: '/residential-consultations',
        controller: 'ResidentialConsultations',
        templateUrl: '../views/residential-consultations.html'
      })
      .state('app.business-consultations', {
        url: '/business-consultations',
        controller: 'BusinessConsultations',
        templateUrl: '../views/business-consultations.html'
      })
      .state('app.personal-consultations', {
        url: '/personal-consultations',
        controller: 'PersonalConsultations',
        templateUrl: '../views/personal-consultations.html'
      })
      .state('app.schedule-consultations', {
        url: '/schedule-consultations',
        controller: 'ScheduleConsultations',
        templateUrl: '../views/schedule-consultations.html'
      })
    //#state
  });


app.value('url', 'https://fengshui2.firebaseio.com/');

