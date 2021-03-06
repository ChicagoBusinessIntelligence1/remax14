'use strict';

angular.module('app')
  .directive('svHomeSm', function (notifications, HomeService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-sm.html',
      scope: {
        draft: '=',
        removeDraft: '&',
        postDraft: '&'
      },
      require: '^sv-homes-user-list',
      link: function ($scope, element, attr, svListCtrl) {
        $scope.homeStatus = svListCtrl.homeStatus;
        $scope.isRent = svListCtrl.isRent;

        $scope.addToWatch = notifications.addToWatch;
        $scope.removeFromWatch = notifications.removeFromWatch;
        $scope.shareHomeTitle = notifications.shareHomeTitle;
        $scope.archiveHome = notifications.archiveHome;
        $scope.postDraftTitle = notifications.postDraftTitle;
        $scope.deleteDraft = notifications.deleteDraft;

        var imageSection = HomeService.findSection($scope.draft, 'images');
        if (!_.isUndefined(imageSection)) {
          if (!_.isUndefined(imageSection.content)) {
            $scope.coverImage = imageSection.content[0];
          }
        }
      }
    };
  });
