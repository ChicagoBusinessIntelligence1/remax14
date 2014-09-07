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
      link: function postLink($scope, element, attrs) {
        var scaleTo = 1.1;
        var info = element.find('div.info');
        console.log(info);
        element.on('mouseover', function (e) {
          TweenMax.fromTo(element, 1, {scale: 1}, {scale: scaleTo, ease: Back.easeOut});
        })
        element.on('mouseout', function (e) {
          TweenMax.fromTo(element, 1, {scale: scaleTo}, {scale: 1, ease: Back.easeOut});
        })
      }
    };
  });
