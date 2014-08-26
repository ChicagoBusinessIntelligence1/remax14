'use strict';

describe('Directive: article', function () {

  // load the directive's module
  beforeEach(module('fengshuiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<article></article>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the article directive');
  }));
});
