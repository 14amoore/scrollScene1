import { ScrollScene } from 'scrollscene';

// you have to create variables to hold references to the dom elements in scrollScene unlike in scrollmagic
const trig1 = document.querySelector('#trigger1');
const anim1 = document.querySelector('#animate1');

// pass the variable containing the dom reference to triggerElement
const scrollScene = new ScrollScene({
  triggerElement: trig1,
  toggle: {
    element: anim1,
    className: 'turnPink',
    reverse: true,
  },
  triggerHook: 0.5,
  offset: 100,
  reverse: true,
  scene: {
    logLevel: 1,
  },
});

scrollScene.Scene.addIndicators({ name: 'pink scene', colorEnd: '#FFFFFF' });
