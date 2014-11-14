'use strict';

angular.module('app')
  .directive('svShareProperty', function ($popover, notifications, $location, HomePropertyService) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-default btn-sm btn-draft" data-toggle="tooltip" data-placement="left" title="{{shareHomeTitle}}">' +
      '<i class="fa fa-share-alt fa-fw"></i>' +
      '</button>',
      scope: {
        home:'=',
        sharedUrl:'@'
      },

      link: function ($scope, element, attr) {

        $scope.$watch('sharedUrl', function (newValue, oldValue) {
          $scope.link = newValue  ;
        });


        $scope.homeAddress = HomePropertyService.getHomeAddress($scope.home);
        $scope.shareHomeTitle = notifications.shareHomeTitle;
        $scope.sharedHomeFbTitle = notifications.sharedHomeFbTitle;




        $scope.shareHome = function () {
          FB.ui(
            {
              method: 'feed',
              name: $scope.homeAddress,
              link: $scope.link,
              description: notifications.sharedHomeFbTitle
            });
        };
        var sharePropertyPopover = $popover(element, {
          container: 'body',
          template: '../../views/popover/share-property-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          scope: $scope
        });
      }
    };
  });
