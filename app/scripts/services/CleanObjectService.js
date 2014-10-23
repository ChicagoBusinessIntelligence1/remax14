'use strict';

angular.module('app')
  .factory('CleanObjectService', function ($firebase, $q, url) {
    return {

      clean: function (obj) {
        var removeProp = ['$id','$priority'];
        obj=angular.fromJson(angular.toJson(obj));
        obj = _.omit(obj,removeProp);
        return obj;
      }
    };

  });
