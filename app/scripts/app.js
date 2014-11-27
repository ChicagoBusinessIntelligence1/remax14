'use strict';

var app = angular.module('app', ['ts.sheets', 'firebase', 'ng-uploadcare', 'ngMessages', 'ngAnimate', 'famous.angular', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.bootstrap', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'xeditable', 'mgcrea.ngStrap.tab'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        resolve: {
          user: function ($firebaseSimpleLogin, $q, $rootScope) {
            var def = $q.defer();
            //if ($rootScope.user === null) {
            //  def.resolve(null);
            //}

            var url = 'https://remax14.firebaseio.com/';
            var mainRef = new Firebase(url);
            var auth = $firebaseSimpleLogin(mainRef);
            auth.$getCurrentUser().then(function (user) {
              if (user === null) {
                def.resolve(null);
              } else {

                def.resolve(user);
              }
            });
            return def.promise;
          }
        },
        controller: 'ProfileCtrl',
        templateUrl: '../views/main.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('app.auth', {
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
        controller: 'ContactUsCtrl',
        templateUrl: '../views/contactus.html'
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
      .state("app.all-rental-homes", {
        url: "/all-rental-homes",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getAllForRent();
          }
        },
        controller: "AllRentalHomesCtrl",
        templateUrl: "../views/all-rental-homes-ctrl.html"
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
      .state("app.all-rental-houses", {
        url: "/all-rental-houses",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getRentalHouses();
          }
        },
        controller: "AllRentalHousesCtrl",
        templateUrl: "../views/all-rental-houses-ctrl.html"
      })
      .state("app.all-rental-apartments", {
        url: "/all-rental-apartments",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getRentalApartments();
          }
        },
        controller: "AllRentalApartmentsCtrl",
        templateUrl: "../views/all-rental-apartments-ctrl.html"
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
      .state("app.profile.home-sale-draft", {
        url: "/home-sale-draft/:mls",
        controller: "HomeSaleDraftCtrl",
        templateUrl: "../views/home-sale-draft-ctrl.html"
      })
      .state("app.remax-home", {
        url: "/remax-home-sale/:mls",
        controller: "HomeSalePostedCtrl",
        templateUrl: "../views/home-sale-posted-ctrl.html"
      })
      .state("app.profile.home-rent-draft", {
        url: "/home-rent-draft/:mls",
        controller: "HomeRentDraftCtrl",
        templateUrl: "../views/home-rent-draft-ctrl.html"
      })
      .state("app.remax-home-rent", {
        url: "/remax-home-rent/:mls",
        controller: "HomeRentPostedCtrl",
        templateUrl: "../views/home-rent-posted-ctrl.html"
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
      .state("app.profile.watch-property", {
        url: "/watch-property",
        controller: "WatchPropertyCtrl",
        templateUrl: "../views/watch-property-ctrl.html"
      })
      .state("app.profile.broker-homes", {
        url: "/homes-shared",
        controller: "HomesSharedCtrl",
        templateUrl: "../views/homes-shared-ctrl.html"
      })
      .state("app.search-sale-results", {
        url: "/search-sale-results",
        resolve: {
          homes: function (SearchService, urlSale, $rootScope) {

            $rootScope.$on('ss', function (event, data) {
              console.log('run');
            });
            return SearchService.find(urlSale);
          }
        },
        controller: "SearchSaleResultsCtrl",
        templateUrl: "../views/search-sale-results-ctrl.html"
      })

      .state("app.search-rent-results", {
        url: "/search-rent-results",
        resolve: {
          homes: function (SearchService, urlRental) {
            return SearchService.find(urlRental);
          }
        },
        controller: "SearchRentResultsCtrl",
        templateUrl: "../views/search-rent-results-ctrl.html"
      })
      .state("login", {
        url: "/login",
        controller: "LoginCtrl",
        templateUrl: "../views/login-ctrl.html"
      })
      .state("app.setting-states-fill", {
        url: "/setting-states-fill",
        controller: "SettingStatesFillCtrl",
        templateUrl: "../views/setting-states-fill-ctrl.html"
      })
      .state("app.homepage-examples", {
        url: "/homepage-examples",
        controller: "HomepageExamplesCtrl",
        templateUrl: "../views/homepage-examples-ctrl.html"
      })
      .state("app.svetic", {
        url: "/svetic",
        controller: "SveticCtrl",
        templateUrl: "../views/svetic-ctrl.html"
      })
      .state("app.admin", {
        abstract: true,
        url: "/admin-panel",
        controller: "AdminPanelCtrl",
        templateUrl: "../views/admin-panel-ctrl.html"
      })
			.state("app.admin.broker-applications", {
				url: "/broker-applications",
				controller:"BrokerApplicationsCtrl",
				templateUrl: "../views/broker-applications-ctrl.html"
			})
			.state("app.registered-brokers", {
				url: "/registered-brokers", 
				controller:"RegisteredBrokersCtrl",
				templateUrl: "../views/registered-brokers-ctrl.html"
			})
//#state
  })

