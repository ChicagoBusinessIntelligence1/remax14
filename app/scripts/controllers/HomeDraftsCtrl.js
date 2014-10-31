'use strict';

angular.module('app')
  .controller('HomeDraftsCtrl', function (DraftsService, $scope, $firebase, $rootScope) {
    $scope.drafts = DraftsService.all($rootScope.user.id);

    $scope.removeDraft = function (mls) {
      DraftsService.remove(mls)
    };
    $scope.postDraft = function (mls) {
      DraftsService.moveToHomes(mls);
    };


    $scope.tabs = [
      {
        title: 'Property for Sale',
        view: 'views/tabs/saleRent/sale.html'
      },
      {
        title: 'Property for Rent',
        view: 'views/tabs/saleRent/rent.html'
      }
    ];
  });
