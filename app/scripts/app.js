'use strict';

var app = angular.module('app', ['firebase', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'xeditable', 'mgcrea.ngStrap.tab'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('app', {
          abstract: true,
          resolve: {
            user: function ($firebaseSimpleLogin, $q) {
              var def = $q.defer();

              var url = 'https://remax14.firebaseio.com/';
              var mainRef = new Firebase(url);
              var auth = $firebaseSimpleLogin(mainRef);
              auth.$getCurrentUser().then(function (user) {
                if (user === null) {
                  def.resolve('');
                } else {

                  def.resolve(user);
                }
              });
              return def.promise;
            }
          },
          controller: 'ProfileCtrl',
          templateUrl: '../partials/main.html'
        })
        .state("app.remax-home-sale", {
          url: "/remax-home-sale/:mls",
          controller: "OneHomeCtrl",
          templateUrl: "../views/one-home.html"
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
        .state("app.all-sale-homes", {
          url: "/all-sale-homes",
          resolve: {
            homes: function (TypeHomesService) {
              return TypeHomesService.getAllForSale();
            }
          },
          controller: "AllSaleHomesCtrl",
          templateUrl: "../views/all-sale-homes-ctrl.html"
        })
        .state("app.condos-sale-homes", {
          url: "/condos-sale-homes",
          resolve: {
            homes: function (TypeHomesService) {
              return TypeHomesService.getCondos();
            }
          },
          controller: "CondosSaleHomesCtrl",
          templateUrl: "../views/condos-sale-homes-ctrl.html"
        })

        .state("app.single-family-homes", {
          url: "/single-family-homes",
          resolve: {
            homes: function (TypeHomesService) {
              return TypeHomesService.getSingleFamily();
            }
          },
          controller: "SingleFamilyHomesCtrl",
          templateUrl: "../views/single-family-homes-ctrl.html"
        })
        .state("app.profile", {
          abstract: true,
          templateUrl: "../views/profile.html"
        })
        .state("app.profile.add-home-sale", {
          url: "/add-home-sale",
          controller: "AddHomeSaleCtrl",
          templateUrl: "../views/add-home-sale-ctrl.html"
        })
        .state("app.profile.add-home-rental", {
          url: "/add-home-rental",
          controller: "AddHomeRentalCtrl",
          templateUrl: "../views/add-home-rental-ctrl.html"
        })
        .state("app.profile.drafts", {
          url: "/home-drafts",
          controller: "HomeDraftsCtrl",
          templateUrl: "../views/home-drafts-ctrl.html"
        })
        .state("app.profile.one-home-draft", {
          url: "/one-home-draft/:mls",
          controller: "OneHomeDraftCtrl",
          templateUrl: "../views/one-home-draft.html"
        })
        .state("app.profile.broker-sold-homes", {
          url: "/broker-sold-homes",
          controller: "BrokerSoldHomesCtrl",
          templateUrl: "../views/broker-sold-homes-ctrl.html"
        })
        .state("app.profile.user-profile", {
          url: "/user-profile",
          controller: "UserProfileCtrl",
          templateUrl: "../views/user-profile.html"
        })
        .state("app.profile.saved-searches", {
          url: "/saved-searches",
          controller: "SavedSearchesCtrl",
          templateUrl: "../views/saved-searches-ctrl.html"
        })
        .state("app.profile.wish-list", {
          url: "/wish-list",
          controller: "WishListCtrl",
          templateUrl: "../views/wish-list-ctrl.html"
        })
        .state("app.profile.watch-list", {
          url: "/watch-list",
          controller: "WatchListCtrl",
          templateUrl: "../views/watch-list-ctrl.html"
        })
        .state("app.profile.broker-homes", {
          url: "/homes-shared",
          controller: "HomesSharedCtrl",
          templateUrl: "../views/homes-shared-ctrl.html"
        })
        .state("app.search-results", {
          url: "/search-results",
          resolve: {
            homes: function (SearchService) {
              return SearchService.find();
            }
          },
          controller: "SearchResultsCtrl",
          templateUrl: "../views/search-results-ctrl.html"
        })
        .state("login", {
          url: "/login",
          controller: "LoginCtrl",
          templateUrl: "../views/login-ctrl.html"
        })
//#state
    })
  ;

app.run(function (editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

