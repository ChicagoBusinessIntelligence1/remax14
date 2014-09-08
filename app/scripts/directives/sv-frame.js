'use strict';

angular.module('app')
  .directive('svFrame', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/sv-frame.html',
      scope: {
        color: '@',
        n: '@'
      },
      link: function ($scope, element, attrs) {
        var isInfoShown = false;
        var el = $(element.children()[0]);
        console.log(el);
        el.bind('mouseover', function (e) {
          isInfoShown = true;
          console.log(isInfoShown);
        })

        el.bind('mouseout', function (e) {
          isInfoShown = false;
        })
      }
    };
  });
