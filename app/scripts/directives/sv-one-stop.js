'use strict';

angular.module('app')
  .directive('svOneStop', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-one-stop.html',
      scope: {},
      link: function ($scope, element, attr) {
        /*global famous*/
// import dependencies
        var Engine = famous.core.Engine;
        var Modifier = famous.core.Modifier;
        var Transform = famous.core.Transform;
        var ImageSurface = famous.surfaces.ImageSurface;
        var Surface = famous.core.Surface;
        var isOrbit = false;

// create the main context
        var ang_element = angular.element(element);
        var orbitDom = ang_element[0];
        var mainContext = Engine.createContext(orbitDom);

        var featureModifier = new Modifier({
          origin: [0.5, 0.5],
          align: [0.5, 0.5],
          opacity: 0
        });

        var firstSurface = new Surface({
          content: "<div class='octagon'>Buy or Sell Home</div>",
          properties: {
            marginTop: '30px',
            marginLeft: '30px'
          }
        });

        mainContext.add(featureModifier).add(firstSurface);

// your app here
        var logo = new ImageSurface({
          size: [350, 350],
          properties: {
            marginTop: '150px'
          },
          content: 'images/home/one-stop-sign.png',
          classes: ['trans-origin']
        });

        var initialTime = Date.now();
        var centerSpinModifierOrbit = new Modifier({
          origin: [0.5, 0.5],
          align: [0.5, 0.5],
          transform: function () {
            return Transform.rotateY(.002 * (Date.now() - initialTime));
          }
        });
        var centerSpinModifierStatic = new Modifier({
          origin: [0.5, 0.5],
          align: [0.5, 0.5]
        });

        mainContext.add(centerSpinModifierStatic).add(logo);
        var isObrbiting = false;
        var orbit = $('#rotation-sign');

        orbit.on('click', function () {
          if (isObrbiting) {
            isObrbiting = false;
            mainContext.add(centerSpinModifierStatic).add(logo);
            featureModifier.setOpacity(0, {duration: 1000});
            featureModifier.setTransform(Transform.translate([100, 0, 0]), {duration: 1000});
          } else {
            isObrbiting = true;
            mainContext.add(centerSpinModifierOrbit).add(logo);
            featureModifier.setOpacity(1, {duration: 1000});
            featureModifier.setTransform(Transform.translate([-100, 0, 0]), {duration: 1000});

          }
          //centerSpinModifier.setTransform(Transform.rotateY(.002 * (Date.now() - initialTime)));
        })
        //orbit.on('mouseout', function () {
        //  //centerSpinModifier.setTransform(Transform.rotateY(.002 * (Date.now() - initialTime)));
        //})
      }
    };
  });
