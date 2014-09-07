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
        var info = element.children('.element-info')[0];
        console.log(info);
        TweenMax.defaultOverwrite = "auto";
        element.
          bind('mouseover', function (e) {
          //TweenMax.fromTo(element, 1, {scale: 1}, {scale: scaleTo, ease: Back.easeOut});
          TweenMax.fromTo(info, 1, {css:{bottom: '-100%'}}, {css:{bottom: '0%'}, overwrite:'auto', ease: Back.easeOut});
        })
        element.bind('mouseout', function (e) {
          //TweenMax.fromTo(element, 1, {scale: scaleTo}, {scale: 1, ease: Back.easeOut});
          TweenMax.fromTo(info, 1, {css:{bottom: '0%'}}, {css:{bottom: '-100%'},  overwrite:'auto',ease: Back.easeOut});
        })
      }
    };
  });
