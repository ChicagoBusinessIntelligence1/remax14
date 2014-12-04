'use strict';

angular.module('app')
  .factory('AddNewFieldService', function ($firebase, $q) {
    return {
      addField: function (section, newFieldType, newFieldTitle) {
        var initialInput = newFieldTitle;

        /*convert to snake case then camelize*/
        var input = _.str.camelize(newFieldTitle.replace(/' '/g, '-'));
        /*convert first letter to lower case and CONCATINATE TO THE REST OF THE PROP NAME*/
        newFieldTitle = input[0].toLowerCase() + input.substr(1);

        /*defining a num of our new prop by counting all elements + 1*/
        var order = Object.keys(section).length;
        var defaultValue = (newFieldType === 'chbx') ? true : initialInput + ' description';

        var newField = {
          order: order,
          title: newFieldTitle,
          type: newFieldType,
          value: defaultValue
        };
        /*provide a default value for automatic saving to DB*/

        /*adding created prop to home section [locally on snapshot] then saving to DB*/
        section.content.push(newField);
      }
    };

  });
