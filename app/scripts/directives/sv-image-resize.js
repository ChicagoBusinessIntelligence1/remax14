'use strict';

angular.module('app')
  .directive('svImageResize', function ($timeout) {
    return {
      restrict: 'A',
      link: function ($scope, element, attr) {
        $scope.safeApply = function (fn) {
          var phase = this.$root.$$phase;
          if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
              fn();
            }
          } else {
            this.$apply(fn);
          }
        };

        element.on('load', function () {
          $scope.$apply(function () {

            $scope.imgWidth = (element.parent()[0].offsetWidth)+10;
            $scope.imgHeight = (element.parent()[0].offsetHeight);

          })

          $scope.$watch(function () {
            return element.css('height');
          }, function (newValue, oldValue) {
            //var num = parseInt(newValue.substr(0,newValue.length-2));
            //newValue=num+10+'px';
            $scope.safeApply(function () {

              $scope.imgHeight = newValue;

            })

          });
          $scope.$watch(function () {
            return element.css('width');
          }, function (newValue, oldValue) {
            $scope.safeApply(function () {

              var num = parseInt(newValue.substr(0,newValue.length-2));
              newValue=num+10+'px';
              $scope.imgWidth = newValue;
            })
          });
        })
      }
    };
  });
