'use strict';

angular.module('app')
  .factory('InitialValuesService', function () {
    return {
      getRandomArrayElement: function (array) {
        var len = array.length;
        var index = Math.floor(Math.random() * len)
        return array[index];
      },
      getRandomArrayElements: function (array) {
        var len = array.length;
        array = _.shuffle(array);
        var index = 2;
        //var index = Math.floor(Math.random() * len)
        var finalString = ''
        for (var i = 0; i < index; i++) {
          var feature = array[i];
          finalString += feature + ', ';
        }
        return finalString.substring(0, finalString.length - 2);
      },
      getRandomValue: function (title) {
        var that = this;
        var randomStr;
        var num1, num2;
        var chance = new Chance(Math.random);

        var floorings = ['Bamboo', 'Carpet and Carpet Tiles', 'Cork', 'Hardwood', 'Engineered Wood', 'Laminate flooring', 'Hard Flooring', 'Linoleum', 'Vinyl', 'Rubber'];
        var roomFeatures = ['floor heating', 'ceiling and floor fan', 'eastern side', '2 levels conditioning', 'extra lights', 'high ceilings', 'modern design', 'electronic control'];
        var propertyTypes =['Single Family House','Apartment','Condo','Multi Family House'];
        var propertyStyles =['Colonial','Contemporary','Federal','Colonial Revival','Strict Style'];
        switch (true) {
          case title.indexOf('price') > -1:
            randomStr = that.randomNumber(6);
            break;
          case title.indexOf('street') > -1:
            randomStr = chance.address();
            break;
          case title.indexOf('propertyType') > -1:
            randomStr = that.getRandomArrayElement(propertyTypes);
            break;
          case title.indexOf('propertyStyle') > -1:
            randomStr = that.getRandomArrayElement(propertyStyles);
            break;
          case title.indexOf('state') > -1:
            randomStr = chance.state();
            break;
          case title.indexOf('city') > -1:
            randomStr = chance.city();
            break;
          case title.indexOf('zip') > -1:
            randomStr = chance.zip();
            break;
          case title.indexOf('Size') > -1:
            num1 = that.randomNumber(2);
            num2 = that.randomNumber(2);
            randomStr = num1 + ' x ' + num2 + ' sq ft';
            break;
          case title.substring(title.length - 5).indexOf('rooms') > -1:
            num1 = that.randomNumber(1);
            randomStr = num1;
            break;
          case title.substring(title.length - 4).indexOf('type') > -1:
            num1 = that.randomNumber(1);
            randomStr = num1;
            break;
          case title.substring(title.length - 5).indexOf('Number') > -1:
            num1 = that.randomNumber(1);
            randomStr = num1;
            break;
          case title.substring(title.length - 5).indexOf('Level') > -1:
            randomStr = that.randomNumber(1) > 5 ? '2 levels' : '1 level';
            break;
          case title.substring(title.length - 8).indexOf('Flooring') > -1:
            randomStr = that.getRandomArrayElement(floorings);
            break;
          case title.substring(title.length - 8).indexOf('Features') > -1:
            randomStr = that.getRandomArrayElements(roomFeatures);
            break;
          default:
            return null;
        }

        return randomStr;
      },
      seed: function (home, isTemplate) {

        var chance=new Chance(Math.random);
        var intFields = ['mls'];
        var that = this;
        if (isTemplate) {

          home.forEach(function (section) {
            var sectionProps = section.content;
            for (var i = 0; i < sectionProps.length; i++) {
              var sectionProp = sectionProps[i];
              var sectionTitle = sectionProp.title;
              var randomValCustom = that.getRandomValue(sectionTitle);
              if (randomValCustom !== null) {
                sectionProp.value = randomValCustom;
                continue;
              }
              if (intFields.indexOf(sectionProp.title) > -1) {
                sectionProp.value = that.randomNumber();
              } else {
                var randomVal = '';
                switch (sectionProp.type) {
                  case 'txt':
                    randomVal = chance.word();
                    break;
                  case 'area':
                  randomVal = chance.paragraph() ;
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

      randomNumber: function (length) {
        length = length ? length : 8;
        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

      }
    }
  });
