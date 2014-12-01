			.state("app.city-homes", {
				url: "/city-homes", 
				controller:"CityHomesCtrl",
				templateUrl: "../views/city-homes-ctrl.html"
			})
'use strict';

var app = angular.module('app', ['angularFileUpload', 'ts.sheets', 'firebase', 'ngMessages', 'ngAnimate', 'famous.angular', 'ngSanitize', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.modal', 'ui.bootstrap', 'ui.router', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'xeditable', 'mgcrea.ngStrap.tab'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    //$locationProvider.html5Mode(true);
    $stateProvider
      .state('app', {
        abstract: true,
        resolve: {
          user: function ($firebaseAuth, $q, $rootScope) {
            var def = $q.defer();

            var url = 'https://remax14.firebaseio.com/';
            var ref = new Firebase(url);
            $rootScope.authObj = $firebaseAuth(ref);

           var authData =  $rootScope.authObj.$getAuth();
            if (authData) {
              def.resolve(authData.facebook.cachedUserProfile);
            } else {
              def.resolve(null);
            }
            return def.promise;
          }
        },
        controller: 'ProfileCtrl',
        templateUrl: '../views/main.html'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state("app.structure", {
        abstract: true,
        templateUrl: "../views/structure.html"
      })
      .state('app.auth', {
        url: '/admin',
        controller: 'LoginCtrl',
        templateUrl: '../views/login.html'
      })
      .state("app.structure.remax-auth", {
        url: "/remax-auth",
        controller: "RemaxAuthCtrl",
        templateUrl: "../views/remax-auth.html"
      })
      .state('app.structure.contact', {
        url: '/contact',
        controller: 'ContactUsCtrl',
        templateUrl: '../views/contactus.html'
      })
      .state('app.structure.remax-articles', {
        url: '/remax-1st-class-articles',
        controller: 'RemaxArticlesCtrl',
        templateUrl: '../views/remax-articles.html'
      })
      .state('app.structure.agents', {
        url: '/remax-1st-class-agents',
        controller: 'AgentsCtrl',
        templateUrl: '../views/agents.html'
      })
      .state('app.structure.become-remax-agent', {
        url: '/become-remax-1st-class-agent',
        controller: 'BecomeRemaxAgentCtrl',
        templateUrl: '../views/become-remax-agent.html'
      })
      .state('app.structure.why-remax', {
        url: '/why-remax-1st-class',
        controller: 'WhyRemaxCtrl',
        templateUrl: '../views/why-remax.html'
      })
      .state("generate", {
        url: "/generate",
        controller: "GenerateCtrl",
        templateUrl: "../views/generate.html"
      })
      .state("app.structure.all-sale-homes", {
        url: "/all-sale-homes",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getAllForSale();
          }
        },
        controller: "AllSaleHomesCtrl",
        templateUrl: "../views/all-sale-homes-ctrl.html"
      })
      .state("app.structure.all-rental-homes", {
        url: "/all-rental-homes",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getAllForRent();
          }
        },
        controller: "AllRentalHomesCtrl",
        templateUrl: "../views/all-rental-homes-ctrl.html"
      })

      .state("app.structure.condos-sale-homes", {
        url: "/condos-sale-homes",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getCondos();
          }
        },
        controller: "CondosSaleHomesCtrl",
        templateUrl: "../views/condos-sale-homes-ctrl.html"
      })
      .state("app.structure.all-rental-houses", {
        url: "/all-rental-houses",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getRentalHouses();
          }
        },
        controller: "AllRentalHousesCtrl",
        templateUrl: "../views/all-rental-houses-ctrl.html"
      })
      .state("app.structure.all-rental-apartments", {
        url: "/all-rental-apartments",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getRentalApartments();
          }
        },
        controller: "AllRentalApartmentsCtrl",
        templateUrl: "../views/all-rental-apartments-ctrl.html"
      })

      .state("app.structure.single-family-homes", {
        url: "/single-family-homes",
        resolve: {
          homes: function (TypeHomesService) {
            return TypeHomesService.getSingleFamily();
          }
        },
        controller: "SingleFamilyHomesCtrl",
        templateUrl: "../views/single-family-homes-ctrl.html"
      })
      .state("app.structure.profile", {
        abstract: true,
        templateUrl: "../views/profile.html"
      })
      .state("app.structure.profile.add-home-sale", {
        url: "/add-home-sale",
        controller: "AddHomeSaleCtrl",
        templateUrl: "../views/add-home-sale-ctrl.html"
      })
      .state("app.structure.profile.add-home-rental", {
        url: "/add-home-rental",
        controller: "AddHomeRentalCtrl",
        templateUrl: "../views/add-home-rental-ctrl.html"
      })
      .state("app.structure.profile.drafts", {
        url: "/home-drafts",
        controller: "HomeDraftsCtrl",
        templateUrl: "../views/home-drafts-ctrl.html"
      })
      .state("app.structure.profile.home-sale-draft", {
        url: "/home-sale-draft/:mls",
        controller: "HomeSaleDraftCtrl",
        templateUrl: "../views/home-sale-draft-ctrl.html"
      })
      .state("app.structure.remax-home", {
        url: "/remax-home-sale/:mls",
        controller: "HomeSalePostedCtrl",
        templateUrl: "../views/home-sale-posted-ctrl.html"
      })
      .state("app.structure.profile.home-rent-draft", {
        url: "/home-rent-draft/:mls",
        controller: "HomeRentDraftCtrl",
        templateUrl: "../views/home-rent-draft-ctrl.html"
      })
      .state("app.structure.remax-home-rent", {
        url: "/remax-home-rent/:mls",
        controller: "HomeRentPostedCtrl",
        templateUrl: "../views/home-rent-posted-ctrl.html"
      })
      .state("app.structure.profile.broker-sold-homes", {
        url: "/broker-sold-homes",
        controller: "BrokerSoldHomesCtrl",
        templateUrl: "../views/broker-sold-homes-ctrl.html"
      })
      .state("app.structure.profile.user-profile", {
        url: "/user-profile",
        controller: "UserProfileCtrl",
        templateUrl: "../views/user-profile.html"
      })
      .state("app.structure.profile.saved-searches", {
        url: "/saved-searches",
        controller: "SavedSearchesCtrl",
        templateUrl: "../views/saved-searches-ctrl.html"
      })
      .state("app.structure.profile.wish-list", {
        url: "/wish-list",
        controller: "WishListCtrl",
        templateUrl: "../views/wish-list-ctrl.html"
      })
      .state("app.structure.profile.watch-property", {
        url: "/watch-property",
        controller: "WatchPropertyCtrl",
        templateUrl: "../views/watch-property-ctrl.html"
      })
      .state("app.structure.profile.broker-homes", {
        url: "/homes-shared",
        controller: "HomesSharedCtrl",
        templateUrl: "../views/homes-shared-ctrl.html"
      })
      .state("app.structure.search-sale-results", {
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

      .state("app.structure.search-rent-results", {
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
      .state("app.structure.setting-states-fill", {
        url: "/setting-states-fill",
        controller: "SettingStatesFillCtrl",
        templateUrl: "../views/setting-states-fill-ctrl.html"
      })
      .state("app.structure.homepage-examples", {
        url: "/homepage-examples",
        controller: "HomepageExamplesCtrl",
        templateUrl: "../views/homepage-examples-ctrl.html"
      })
      .state("app.structure.svetic", {
        url: "/svetic",
        controller: "SveticCtrl",
        templateUrl: "../views/svetic-ctrl.html"
      })
      .state("app.structure.admin", {
        abstract: true,
        url: "/admin",
        controller: "AdminPanelCtrl",
        templateUrl: "../views/admin-panel-ctrl.html"
      })
      .state("app.structure.admin.broker-applications", {
        url: "/broker-applications",
        controller: "BrokerApplicationsCtrl",
        templateUrl: "../views/broker-applications-ctrl.html"
      })
      .state("app.structure.admin.registered-brokers", {
        url: "/registered-brokers",
        controller: "RegisteredBrokersCtrl",
        templateUrl: "../views/registered-brokers-ctrl.html"
      })
  }).directive('ngThumb', ['$window', function ($window) {
    var helper = {
      support: !!($window.FileReader && $window.CanvasRenderingContext2D),
      isFile: function (item) {
        return angular.isObject(item) && item instanceof $window.File;
      },
      isImage: function (file) {
        var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    };

    return {
      restrict: 'A',
      template: '<canvas/>',
      link: function (scope, element, attributes) {
        if (!helper.support) return;

        var params = scope.$eval(attributes.ngThumb);

        if (!helper.isFile(params.file)) return;
        if (!helper.isImage(params.file)) return;

        var canvas = element.find('canvas');
        var reader = new FileReader();

        reader.onload = onLoadFile;
        reader.readAsDataURL(params.file);

        function onLoadFile(event) {
          var img = new Image();
          img.onload = onLoadImage;
          img.src = event.target.result;
        }

        function onLoadImage() {
          var width = params.width || this.width / this.height * params.height;
          var height = params.height || this.height / this.width * params.width;
          canvas.attr({width: width, height: height});
          canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
        }
      }
    };
  }]);

