'use strict';

angular.module('app')
  .directive('svRemaxHome', function (AddSearchFeaturesService, FileUploader, $modal, $window, InitialValuesService, BrokerService, HomeService, $stateParams, $state, $rootScope, urlSale, urlRental) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-remax-home.html',
      scope: {
        isDraft: '=',
        isRent: '='
      },

      controller: function ($scope) {

        var that = this;
        $scope.uploadedImages = [];


        $scope.uploader = new FileUploader();
        var galleryModal = $modal({scope: $scope, template: '../../views/modals/gallery-modal.html', show: false});

        $scope.showGalleryModal = function () {
          galleryModal.show();
        };
        $scope.hideGalleryModal = function () {
          galleryModal.hide();
        };

        this.required = ['mls', 'state', 'city', 'zip'];
        $scope.tooltip = {
          "title": "Please save listing first",
          "checked": false
        };
        var url = $scope.isRent ? urlRental : urlSale;
        var mls = $stateParams.mls;
        $scope.isTemplate = mls ? false : true;
        var home = HomeService.getArrayFire(url, mls, $scope.isDraft);
        home.$loaded(function (home) {
          if (_.isNull($rootScope.user) || _.isUndefined($rootScope.user)) {
            $scope.isEditable = false;

          } else{

          if ($rootScope.user.isAdmin) {
            $scope.isEditable = true;
          } else {
            $scope.isEditable = HomeService.isEditable(home, $rootScope.user.id);
          }
          }
          that.isEditable = $scope.isEditable;
          $scope.home = home;

          $scope.home = InitialValuesService.seed($scope.home, $scope.isTemplate);
          $scope.isDataLoading = false;

          var images = HomeService.findSection($scope.home, 'images');
          if (!_.isUndefined(images)) {
            $scope.images = images.content;
          }
        })
      },

      link: function ($scope, element, attr) {

        $scope.clearGallery = function () {

          var homeSection = HomeService.findSection($scope.home, 'images');
          homeSection.content = [];

          HomeService.updateHomeSection(homeSection).then(function () {
            $scope.images = [];
          })
        }

        $scope.moveToTrash = function () {
          HomeService.moveToTrash();
        };

        $scope.saveTemplate = function () {
          $scope.home = BrokerService.addBroker($scope.home, $rootScope.user);
          $scope.home = AddSearchFeaturesService.decorate($scope.home);
          HomeService.saveToDrafts($scope.home).then(function (result) {
            $state.go("app.structure.profile.drafts");
          });
        };

        $scope.updateHomeSection = function (section) {
          section = AddSearchFeaturesService.decorateSection(section);
          HomeService.updateHomeSection(section);
        };

        $scope.removeImage = function (image, index) {
          var homeSection = HomeService.findSection($scope.home, 'images');
          homeSection.content.splice(index, 1);

          HomeService.updateHomeSection(homeSection).then(function () {
            $scope.images.splice(index, 1);
            var breakPoint = 1;
          })

        };
        $scope.addImage = function (img64) {
          var homeSection = HomeService.findSection($scope.home, 'images');
          if (_.isUndefined(homeSection)) {
            homeSection = {
              $id: $scope.home.length,
              title: 'images',
              order: $scope.home.length,
              content: []
            }
          }
          if (_.isUndefined(homeSection.content)) {
            homeSection.content = [];
          }
          homeSection.content.push(img64);

          HomeService.updateHomeSection(homeSection).then(function () {
            $scope.images = HomeService.findSection($scope.home, 'images').content;
          })
        };
      }
    };
  });
