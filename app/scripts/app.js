'use strict';

var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker'])
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
        controller: 'FirePersonalityCtrl',
        templateUrl: '../views/fire-personality.html'
      })
      .state('app.hard-wood-personality', {
        url: '/hard-wood-personality',
        controller: 'HardwoodPersonalityCtrl',
        templateUrl: '../views/hardwood-personality.html'
      })
      .state('app.soft-wood-personality', {
        url: '/soft-wood-personality',
        controller: 'SoftwoodPersonalityCtrl',
        templateUrl: '../views/softwood-personality.html'
      })
      .state('app.water-personality', {
        url: '/water-personality',
        controller: 'WaterPersonalityCtrl',
        templateUrl: '../views/water-personality.html'
      })
      .state('app.hard-metal-personality', {
        url: '/hard-metal-personality',
        controller: 'HardmetalPersonalityCtrl',
        templateUrl: '../views/hardmetal-personality.html'
      })
      .state('app.soft-metal-personality', {
        url: '/soft-metal-personality',
        controller: 'SoftmetalPersonalityCtrl',
        templateUrl: '../views/softmetal-personality.html'
      })
      .state('app.mountain-earth-personality', {
        url: '/mountain-earth-personality',
        controller: 'MountainearthPersonalityCtrl',
        templateUrl: '../views/mountainearth-personality.html'
      })
      .state('app.mother-earth-personality', {
        url: '/mother-earth-personality',
        controller: 'MotherearthPersonalityCtrl',
        templateUrl: '../views/motherearth-personality.html'
      })
      .state('app.secrets-fengshui', {
        url: '/secrets-fengshui',
        controller: 'SecretsFengshuiCtrl',
        templateUrl: '../views/secrets-fengshui.html'
      })
      .state('app.fengshui-articles', {
        url: '/fengshui-articles',
        controller: 'FengshuiArticlesCtrl',
        templateUrl: '../views/fengshui-articles.html'
      })
      .state("app.audiobooks", {
        url: "/audiobooks",
        controller: "AudiobooksCtrl",
        templateUrl: "../views/audiobooks.html"
      })
      .state('app.education', {
        url: '/education-fengshui',
        controller: 'EducationCtrl',
        templateUrl: '../views/education.html'
      })
      .state('app.about-fengshui', {
        url: '/about-fengshui',
        controller: 'AboutFengshuiCtrl',
        templateUrl: '../views/about-fengshui.html'
      })
      .state('app.yin-yang', {
        url: '/yin-yang-fengshui',
        controller: 'YinYangCtrl',
        templateUrl: '../views/yin-yang.html'
      })
      .state('app.wu-xing-elements', {
        url: '/wu-xing-elements',
        controller: 'WuXingElementsCtrl',
        templateUrl: '../views/wu-xing-elements.html'
      })
      .state('app.qi-energy', {
        url: '/qi-energy',
        controller: 'QiEnergyCtrl',
        templateUrl: '../views/qi-energy.html'
      })
      .state('app.bagua', {
        url: '/bagua-eight-trigrams',
        controller: 'BaguaCtrl',
        templateUrl: '../views/bagua.html'
      })
      .state('app.residential-consultations', {
        url: '/residential-consultations',
        controller: 'ResidentialConsultationsCtrl',
        templateUrl: '../views/residential-consultations.html'
      })
      .state('app.business-consultations', {
        url: '/business-consultations',
        controller: 'BusinessConsultationsCtrl',
        templateUrl: '../views/business-consultations.html'
      })
      .state('app.personal-consultations', {
        url: '/personal-consultations',
        controller: 'PersonalConsultationsCtrl',
        templateUrl: '../views/personal-consultations.html'
      })
      .state('app.schedule-consultations', {
        url: '/schedule-consultations',
        controller: 'ScheduleConsultationsCtrl',
        templateUrl: '../views/schedule-consultations.html'

      })
//#state
  });


app.value('url', 'https://fengshui2.firebaseio.com/');


app.animation('.js-animation', function () {
  var height,
    width;
  return {
    enter: function (element, done) {
      element.css('opacity', 0);
      $(element).animate({'opacity': '1'});
      done();
    },
    leave: function (element, done) {
      TweenMax.to(element, 1, {opacity: 0, onComplete: done});

    },
    move: function (element, done) {
      element.css('opacity', 0);
      TweenMax.to(element, 1, {opacity: 1, onComplete: done});
    },

    addClass: function (element, className, done) {
      height = element.height();
      width = element.width();
      element.css('height', height);
      element.css('width', width);
      element.css('width', width);



      if (className == 'ng-hide') {
        TweenMax.to(element, 1, {
          height: 0,
          width: 0,
          rotation: 360,
          onComplete: done
        });
      }
    },
    removeClass: function (element, className, done) {
      if (className == 'ng-hide') {
        TweenMax.to(element, 1, {
          height: height,
          width: width,
          rotation: -360,
          onComplete: done
        });
      }


    }
  }
});
