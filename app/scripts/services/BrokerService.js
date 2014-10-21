'use strict';

angular.module('app')
  .factory('BrokerService', function () {
    return {
      addBroker: function (home, loggedUser) {
       var brokerContent=[{
          id: loggedUser.id,
          name: loggedUser.displayName
        }];
        var index = home.length;
        var brokers = {
          $id:index,
          title:'brokers',
          order:199,
          content:brokerContent
        }

        home[index]=brokers;


        return home;
      }
    };
  });
