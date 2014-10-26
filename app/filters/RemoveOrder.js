'use strict';

angular.module('app')
  .filter('removeOrder', function () {
    return function (input) {
      var newArr= _.reject(input, function (el) {
       return el.$id==='order';
      })


      return newArr;
    };
  });
