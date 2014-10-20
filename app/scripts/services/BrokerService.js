'use strict';

angular.module('app')
  .factory('BrokerService', function () {
    return {
      addBroker: function (home, loggedUser) {
        home['brokers'] = [{
          id: loggedUser.id,
          name: loggedUser.displayName
        }];
        return home;
      }
    };
  });
