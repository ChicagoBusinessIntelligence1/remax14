angular.module('app')
  .directive('photoCube', ["$famous", "$famousDecorator", function ($famous, $famousDecorator) {
    return {
      templateUrl: 'scripts/directives/photo-cube/photo-cube.html',
      scope: true,
      controller: 'PhotoCubeCtrl',
      restrict: 'EA',
      compile: function(tElement, tAttrs, transclude){
        var Modifier = $famous['famous/core/Modifier'];
        var Surface = $famous['famous/core/Surface'];
        var RenderNode = $famous['famous/core/RenderNode'];
        var Transform = $famous['famous/core/Transform'];

        return {
          pre: function(scope, element, attrs){
            $famousDecorator.ensureIsolate(scope);
          },
          post: function(scope, element, attrs){
            scope.photo = scope.$eval(attrs.photo);
          }
        };
      }
    };
  }]);
