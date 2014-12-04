'use strict';

angular.module('app')
  .directive('svHttpPrefix', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, controller) {
        if (scope.inputType!=='url') {
         return ;
        }

        function ensureHttpPrefix(value) {
          if(value && !/^(http):\/\//i.test(value)
            && 'http://'.indexOf(value) === -1) {
            controller.$setViewValue('http://' + value);
            controller.$render();
            return 'http://' + value;
          }
          else{
            if (/\..+/g.test(value)) {
            controller.$setValidity('url',true);
            } else{

            controller.$setValidity('url',false);
            }
            return value;

          }
        }
        controller.$formatters.push(ensureHttpPrefix);
        controller.$parsers.push(ensureHttpPrefix);
      }
    };
  });
