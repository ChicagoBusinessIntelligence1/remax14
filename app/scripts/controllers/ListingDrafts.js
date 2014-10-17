'use strict';

angular.module('app')
  .controller('ListingDraftsCtrl', function ($scope, $firebase, urlResidential,urlBrokers, $rootScope) {
    $rootScope.auth.$getCurrentUser().then(function (user) {
      var draftsRepo = urlBrokers + user.id + '/drafts/residential/';
      $scope.draftsRef = $firebase(new Firebase(draftsRepo));
      $scope.drafts = $scope.draftsRef.$asArray();

      $scope.removeDraft = function (mls) {
        $scope.draftsRef.$remove(mls);
      };
      $scope.postDraft = function (mls) {
        var draft = $scope.drafts.$getRecord(mls);
        console.log(draft);
        var listingsRepo = urlResidential;
        $scope.listingsRef = $firebase(new Firebase(listingsRepo));
        $scope.listings = $scope.listingsRef.$asObject();
        $scope.listings[mls] = draft;
        $scope.listings.$save(mls);
        $scope.draftsRef.$remove(mls);
      };
    })
  });
