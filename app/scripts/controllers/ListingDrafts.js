'use strict';

angular.module('app')
  .controller('ListingDraftsCtrl', function ($scope, $firebase, urlResidential, urlBrokers, $rootScope) {;
    $rootScope.auth.$getCurrentUser().then(function (user) {
      var draftsRepo = urlBrokers + user.id + '/residential/drafts/';
      $scope.draftsRef = $firebase(new Firebase(draftsRepo));
      $scope.drafts = $scope.draftsRef.$asArray();

      $scope.removeDraft = function (mls) {
        $scope.draftsRef.$remove(mls);
      };
      $scope.postDraft = function (mls) {
        var draft = $scope.drafts.$getRecord(mls);
        draft = _.omit(draft, ['$id','$priority','$$hashKey']);
        $scope.listingsRef = $firebase(new Firebase(urlResidential + mls));
        $scope.listingsRef.$set(draft);

        $scope.draftsRef.$remove(mls);
      };
    })
  });
