'use strict';

angular.module('app')
  .directive('svBtnRemoveSearch', function ($popover,QueryService) {
    return {
      restrict: 'E',
      template: '<button class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Remove this Search"><i class="fa fa-remove fa-fw"></i></button>',
      replace: true,
      scope: {
        key:'@'
      },
      link: function ($scope, element, attr) {
        $scope.removeSearch = function () {
          QueryService.remove($scope.key).then(function () {

          toastr.warning('Yor search was successfully removed');
          })
        };
        var removeSearch = $popover(element, {
          container: 'body',
          template: '../../views/popover/remove-search-popover.html',
          placement: 'bottom',
          trigger: 'focus',
          animation: 'am-flip-x',
          scope: $scope
        });

      },
      controller: function ($scope) {
        //this.var=something;
      }
    };
  });
