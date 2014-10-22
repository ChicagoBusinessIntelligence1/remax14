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
            user: function ($firebaseSimpleLogin, $q) {
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
          controller: 'ProfileCtrl',
          templateUrl: "../views/profile.html"
        })
        .state("app.profile.remax-homes", {
          url: "/homes",
          controller: "HomesCtrl",
          templateUrl: "../views/homes.html"
        })
        .state("app.profile.drafts", {
          url: "/home-drafts",
          controller: "HomeDraftsCtrl",
          templateUrl: "../views/home-drafts.html"
        })
        .state("app.profile.one-home-draft", {
          url: "/one-home-draft/:mls",
          controller: "OneHomeDraftCtrl",
          templateUrl: "../views/one-home-draft.html"
        })
        .state("app.profile.manage-homes", {
          url: "/manage-homes",
          controller: "ManageHomesCtrl",
          templateUrl: "../views/manage-homes.html"
        })
        .state("app.profile.user-profile", {
          url: "/user-profile",
          controller: "UserProfileCtrl",
          templateUrl: "../views/user-profile.html"
        })
        .state("app.profile.one-home", {
          url: "/remax-home-sale/:mls",
          controller: "OneHomeCtrl",
          templateUrl: "../views/one-home.html"
        })
        .state("app.profile.add-home", {
          url: "/add-home",
          controller: "AddHomeCtrl",
          templateUrl: "../views/add-home.html"
        })
        .state("app.profile.homes", {
          url: "/homes-shared",
          controller: "HomeSharedCtrl",
          templateUrl: "../views/home-shared.html"
        })
			.state("search-results", {
				url: "/search-results", 
				controller:"SearchResultsCtrl",
				templateUrl: "../views/search-results-ctrl.html"
			})
//#state
    })
  ;


