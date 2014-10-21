'use strict';

angular.module('app')
  .controller('ListingDraftsCtrl', function (DraftsService, $scope, $firebase,  $rootScope) {

      $scope.drafts = DraftsService.all($rootScope.user.id);

      $scope.removeDraft = function (mls) {
        DraftsService.remove(mls)
      };
      $scope.postDraft = function (mls) {
        DraftsService.moveToHomes(mls);

      };
  });
