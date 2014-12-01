'use strict';

angular.module('app')
  .directive('svOneStop', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-one-stop.html',
      scope: {},
      link: function ($scope, element, attr) {
        var Engine = famous.core.Engine;
        var StateModifier = famous.modifiers.StateModifier;
        var Transform = famous.core.Transform;
        var Modifier = famous.core.Modifier;
        var ImageSurface = famous.surfaces.ImageSurface;
        var Surface = famous.core.Surface;
        var Easing = famous.transitions.Easing;
        var Transitionable = famous.transitions.Transitionable;
        var TRANSITION = {duration: 900, curve: Easing.outBounce};
        var ourAdvantages = [
          'Rude Tel. response',
          'Hard To understand English',
          'Late for appointments',
          'We force our customers to accept offers'
        ];
        var ang_element = angular.element(element);
        var orbitDom = ang_element[0];
        var mainContext = Engine.createContext(orbitDom);

        var signModifier = new StateModifier({
          origin: [0.5, 0.5],
          align: [0.5, 0.5]
        });

        var sign = new ImageSurface({
          size: [280, 280],
          properties: {
            marginTop: '120px',
            cursor: 'pointer'
          },
          content: 'images/home/one-stop-sign.png',
          classes: ['trans-origin']
        });


        var shift = 40;
        for (var i = 0; i < ourAdvantages.length; i++) {
          var adv = ourAdvantages[i];

          var indAdvMod = new Modifier(
            {
              size: [100, 50],
              transform: function () {
                var xShift = i*shift;
                var yShift = i * 2;
                return Transform.translate(xShift, yShift, 0);
              }
            });
          var surface = new Surface({
            size: [100, 50],
            content: "<div >" + adv + "</div>"
          });
          mainContext.add(indAdvMod).add(surface);
        }

        mainContext.add(signModifier).add(sign);

        sign.on('click', function () {
          signModifier.setTransform(
            Transform.translate(-200, 0, 0),
            TRANSITION
          );
        })
      }
    };
  });
