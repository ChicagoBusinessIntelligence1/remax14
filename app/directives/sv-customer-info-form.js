'use strict';

angular.module('app')
  .directive('svCustomerInfoForm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-customer-info-form.html',
      scope: {
        fName: '=',
        lName: '=',
        email: '=',
        phone: '='
      },
      link: function ($scope, element, attr) {
        $scope.updateProfileInfo = function (fName, lName, email, phone) {
          toastr.success('You changes have been successfully saved');
        };
      }
    };
  });
