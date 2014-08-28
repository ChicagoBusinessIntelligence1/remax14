'use strict';

describe('Controller: TestdCtrl', function () {

  // load the controller's module
  beforeEach(module('fengshuiApp'));

  var TestdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestdCtrl = $controller('TestdCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
