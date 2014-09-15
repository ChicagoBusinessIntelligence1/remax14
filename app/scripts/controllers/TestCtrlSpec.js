/**
 * @module test.app
 * @name TestCtrl
 * @description
 * Tests for TestCtrl under app
 * _Enter the test description._
 * */


describe('Controller: app.TestCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('TestCtrl', {
            $scope: scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
