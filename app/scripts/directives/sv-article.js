'use strict';

/**
 * @ngdoc directive
 * @name fengshuiApp.directive:svArticle
 * @description
 * # svArticle
 */
angular.module('fengshuiApp')
  .directive('svArticle', function () {
    return {
      template: '<div>Test</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the svArticle directive');
      }
    };
  });
