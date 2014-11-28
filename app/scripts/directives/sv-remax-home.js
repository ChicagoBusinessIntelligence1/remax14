'use strict';

angular.module('app')
  .directive('svRemaxHome', function (FileUploader, $modal, $window, InitialValuesService, BrokerService, HomeService, $stateParams, $state, $rootScope, urlSale, urlRental) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-remax-home.html',
      scope: {
        isDraft: '=',
        isRent: '='
      },

      controller: function ($scope) {
        $scope.uploadedImages = [];

        $scope.uploader = new FileUploader();
        var galleryModal = $modal({scope: $scope, template: '../../views/modals/gallery-modal.html', show: false});
        $scope.showGalleryModal = function() {
          galleryModal.$promise.then(galleryModal.show);
        };
        var breakPoint = 1;

        this.required = ['mls', 'state', 'city', 'zip'];
        $scope.tooltip = {
          "title": "Please save listing first",
          "checked": false
        };
      },

      link: function ($scope, element, attr) {

        var url = $scope.isRent ? urlRental : urlSale;
        var mls = $stateParams.mls;
        $scope.isTemplate = mls ? false : true;
        $scope.home = HomeService.getArrayFire(url, mls, $scope.isDraft);
        $scope.isDataLoading = true;

        $scope.home.$loaded(function () {
          $scope.home = InitialValuesService.seed($scope.home, $scope.isTemplate);
          $scope.isDataLoading = false;

          var images = HomeService.findSection($scope.home, 'images');
          if (!_.isUndefined(images)) {
            $scope.images = images.content;

          }
        })

        $scope.moveToTrash = function () {
          HomeService.moveToTrash();
        };

        $scope.saveTemplate = function () {
          $scope.home = BrokerService.addBroker($scope.home, $rootScope.user);
          $scope.home = AddSearchFeaturesService.decorate($scope.home);
          HomeService.saveToDrafts($scope.home).then(function (result) {
            $state.go("app.profile.drafts");
          });
        };

        $scope.updateHomeSection = function (section) {
          section = AddSearchFeaturesService.decorateSection(section);
          HomeService.updateHomeSection(section);
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
