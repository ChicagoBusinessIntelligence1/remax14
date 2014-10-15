'use strict';

angular.module('app')
  .controller('ListingDraftsCtrl', function ($scope, $firebase, urlBrokers, $rootScope) {
    $rootScope.auth.$getCurrentUser().then(function (user) {
      var draftsRepo = urlBrokers + user.id + '/drafts/residential/';
      $scope.draftsRef = $firebase(new Firebase(draftsRepo));
      $scope.drafts = $scope.draftsRef.$asArray();

      $scope.removeDraft = function (mls) {
        $scope.draftsRef.$remove(mls);
        $scope.draftsRef.$save();
      };
    })
  });
