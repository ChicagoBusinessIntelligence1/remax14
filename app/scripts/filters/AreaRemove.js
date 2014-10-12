'use strict';

angular.module('app')
  .filter('areaRemove', function () {
    return function (input, isAreaRemove) {
      if (isAreaRemove) {

        input = _.reject(input, function (elem) {
          return elem.value === 'area';
        });
      }
      return input;
    };
  });
