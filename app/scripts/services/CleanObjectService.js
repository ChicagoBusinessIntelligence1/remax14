'use strict';

angular.module('app')
  .factory('CleanObjectService', function ($firebase, $q, url) {
    return {

      clean: function (obj) {
        var that = this;
        var removeProp = ['$id', '$priority'];
        obj = angular.fromJson(angular.toJson(obj));
        obj = _.omit(obj, removeProp);

        angular.forEach(obj, function (prop, key) {
          var isArray = _.isArray(prop);
          var isObject = _.isObject(prop);
          if (isArray || isObject) {
            prop = that.cleanProp(prop);
            obj[key] = prop;
          }
        })

        return obj;
      },
      cleanProp: function (obj) {
        var removeProp = ['$id', '$priority'];
        obj = angular.fromJson(angular.toJson(obj));
        obj = _.omit(obj, removeProp);
        return obj;
      }
    };

  });
