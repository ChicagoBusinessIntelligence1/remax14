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
          origin: [0, 1],
          align: [0.5, 0],
          size:[150,50],
          opacity:0

        });

        var firstSurface = new Surface({
          content: "<div>Buy or Sell Home</div>",
          properties: {
            backgroundColor: 'rgb(240, 238, 233)',
            textAlign: 'left',
            padding: '5px',
            border: '2px solid rgb(210, 208, 203)',
            marginTop: '50px',
            marginLeft: '50px'
          }
        });

        mainContext.add(featureModifier).add(firstSurface);

// your app here
        var logo = new ImageSurface({
          size: [108, 108],
          content: 'images/header/one-stop-img.png',
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
            featureModifier.setOpacity(0, {duration:1000});
          } else {
            isObrbiting = true;
            mainContext.add(centerSpinModifierOrbit).add(logo);
            featureModifier.setOpacity(1, {duration:1000});

          }
          //centerSpinModifier.setTransform(Transform.rotateY(.002 * (Date.now() - initialTime)));
        })
        //orbit.on('mouseout', function () {
        //  //centerSpinModifier.setTransform(Transform.rotateY(.002 * (Date.now() - initialTime)));
        //})
      }
    };
  });
