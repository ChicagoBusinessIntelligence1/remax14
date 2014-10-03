'use strict';

var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: '../partials/main.html'
      })
      .state('app.admin', {
        url: '/admin',
        controller: 'LoginCtrl',
        templateUrl: '../views/login.html'
      })
      .state('app.contact', {
        url: '/contact',
        controller: 'ContactusCtrl',
        templateUrl: '../views/contactus.html'
      })
      .state('app.home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: '../partials/home.html'
      })
      .state('app.remax-articles', {
        url: '/remax-1st-class-articles',
        controller: 'RemaxArticlesCtrl',
        templateUrl: '../views/remax-articles.html'
      })
      .state('app.agents', {
        url: '/remax-1st-class-agents',
        controller: 'AgentsCtrl',
        templateUrl: '../views/agents.html'
      })
      .state('app.become-remax-agent', {
        url: '/become-remax-1st-class-agent',
        controller: 'BecomeRemaxAgentCtrl',
        templateUrl: '../views/become-remax-agent.html'
      })
      .state('app.why-remax', {
        url: '/why-remax-1st-class',
        controller: 'WhyRemaxCtrl',
        templateUrl: '../views/why-remax.html'
      })
      .state("generate", {
        url: "/generate",
        controller: "GenerateCtrl",
        templateUrl: "../views/generate.html"
      })
			.state("app.profile", {
        abstract: true,
				templateUrl: "../views/profile.html"
			})
			.state("app.profile.listings", {
				url: "/listings",
				controller:"ListingsCtrl",
				templateUrl: "../views/listings.html"
			})
			.state("app.profile.manage-listings", {
				url: "/manage-listings",
				controller:"Manage-listingsCtrl",
				templateUrl: "../views/manage-listings.html"
			})
			.state("app.profile.broker-profile", {
				url: "/broker-profile",
				controller:"Broker-profileCtrl",
				templateUrl: "../views/broker-profile.html"
			})
			.state("app.profile.one-listing", {
				url: "/remax-property-listing",
				controller:"OneListingCtrl",
				templateUrl: "../views/one-listing.html"
			})
//#state
  });

app.value('url', 'https://remax14.firebaseio.com/');

app.animation('.prop-info', function () {
  var height,
    width;
  return {
    enter: function (element, done) {
      height = element.height();
      element.css('top', -height);
      element.css('opacity', 0);

      TweenMax.to(element, 1, {opacity: 1, top: 0, onComplete: done});
    },
    leave: function (element, done) {
      TweenMax.to(element, 1, {delay: 0.4, opacity: 0, top: -height, onComplete: done});
    }
  }
});
app.animation('.accord-house', function () {
  var height,
      duration=0.5;
  return {

    addClass: function (element, className, done) {
      height = element.height();

      if (className == 'ng-hide') {
        TweenMax.to(element, duration, {
          top:-height,
          onComplete: done });
      }
    },
    removeClass: function (element, className, done) {
      if (className == 'ng-hide') {
        TweenMax.to(element, duration, {
          top:0,
          onComplete: done });
      }


    }
  }
});
