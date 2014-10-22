'use strict';

angular.module('app')
  .factory('InitialValuesService', function () {
    return {
      seed: function (home, isTemplate) {
        var intFields = ['mls'];
        var that = this;
        if (isTemplate) {

          home.forEach(function (section) {
            var sectionProps = section.content;
            for (var i = 0; i < sectionProps.length; i++) {
              var sectionProp = sectionProps[i];
              if (intFields.indexOf(sectionProp.title) > -1) {
                sectionProp.value = that.randomNumber();
              } else {
                var randomVal = '';
                switch (sectionProp.type) {
                  case 'txt':
                    randomVal = that.randomString(5);
                    break;
                  case 'area':
                    randomVal = that.randomString(100) + ' ' + that.randomString(50);
                    break;
                  case 'chbx':
                    randomVal = that.randomBool();
                    break;
                }
                sectionProp.value = randomVal;
              }
            }

          })

        }
        return home;
      },
      randomBool: function () {
        return Math.random() < .5;
      },
      randomString: function randomstring(L) {
        if (_.isUndefined(L)) {
          L = Math.floor(Math.random() * 23 + 3);
        }

        var numberWords = Math.floor(Math.random() * 3 + 1);

        var s = '';
          var randomchar = function () {
            var n = Math.floor(Math.random() * 62);
            if (n < 10) return n; //1-10
            if (n < 36) return String.fromCharCode(n + 55); //A-Z
            return String.fromCharCode(n + 61); //a-z
          }
          while (s.length < L) s += randomchar();
        return s;
      },

      randomNumber: function getRandom(length) {
        length = length ? length : 8;
        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

      }
    }
  });
