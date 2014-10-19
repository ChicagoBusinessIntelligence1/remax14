/// <reference path="services/MyService.js" />
/// <reference path="services/MyService.js" />
/// <reference path="services/MyService.js" />
/// <reference path="services/MyService.js" />
/// <reference path="services/MyService.js" />
profile.service("MyService", MyService);
/// <reference path="services/MyseerService.js" />
profile.service("MyseerService", MyseerService);
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
        .state("app.remax-auth", {
          url: "/remax-auth",
          controller: "RemaxAuthCtrl",
          templateUrl: "../views/remax-auth.html"
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
          resolve: {
             user: function ($firebaseSimpleLogin,$q) {
              var def = $q.defer();

	            var url = 'https://remax14.firebaseio.com/';
              var mainRef = new Firebase(url);
              var auth = $firebaseSimpleLogin(mainRef);
               auth.$getCurrentUser().then(function (user) {
                def.resolve(user);
              });
              return def.promise;
            }
          },
          abstract: true,
          templateUrl: "../views/profile.html"
        })
        .state("listings", {
          url: "/listings",
          controller: "ListingsCtrl",
          templateUrl: "../views/listings.html"
        })
        .state("app.profile.drafts", {
          url: "/listing-drafts",
          controller: "ListingDraftsCtrl",
          templateUrl: "../views/listing-drafts.html"
        })
        .state("app.profile.one-listing-draft", {
          url: "/one-listing-draft/:mls",
          controller: "OneListingDraftCtrl",
          templateUrl: "../views/one-listing-draft.html"
        })
        .state("app.profile.manage-listings", {
          url: "/manage-listings",
          controller: "Manage-listingsCtrl",
          templateUrl: "../views/manage-listings.html"
        })
        .state("app.profile.user-profile", {
          url: "/user-profile",
          controller: "UserProfileCtrl",
          templateUrl: "../views/user-profile.html"
        })
        .state("app.profile.one-listing", {
          url: "/remax-property-sale/:mls",
          controller: "OneListingCtrl",
          templateUrl: "../views/one-listing.html"
        })
        .state("app.profile.add-listing", {
          url: "/add-listing",
          controller: "AddListingCtrl",
          templateUrl: "../views/add-listing.html"
        })
        .state("app.profile.listings", {
          url: "/listing-shared",
          controller: "ListingSharedCtrl",
          templateUrl: "../views/listing-shared.html"
        })
//#state
    })
  ;


