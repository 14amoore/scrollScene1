/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { ScrollScene } from 'scrollscene';

// you have to create variables to hold references to the dom elements in scrollScene unlike in scrollmagic
const trig1 = document.querySelector('#trigger1');
const anim1 = document.querySelector('#animate1');
const logLook = document.querySelector('#logLook');
const endChange = document.querySelector('#endChange');

// pass the variable containing the dom reference to triggerElement
const scrollScene = new ScrollScene({
  triggerElement: trig1,
  toggle: {
    element: anim1,
    className: 'turnPink',
    reverse: true,
  },
  triggerHook: 0,
  duration: '100%',
  reverse: true,
  scene: {
    logLevel: 3,
  },
});

scrollScene.Scene.on('enter', function (event) {
  console.log('scene entered');
});

scrollScene.Scene.on('enter', function (event) {
  logLook.innerHTML = 'Look at your console!';
});

scrollScene.Scene.on('enter', function (event) {
  endChange.innerHTML =
    'When you leave the scene it will be logged to the console.';
});

scrollScene.Scene.on('leave', function (event) {
  console.log('scene left');
});

scrollScene.Scene.on('leave', function (event) {
  endChange.innerHTML = 'You have left the scene.';
});

scrollScene.Scene.on('leave', function (event) {
  logLook.innerHTML =
    'When this text reaches the top of the screen the background will turn pink, and there will be a message logged to the console.';
});

scrollScene.Scene.addIndicators({ name: 'event scene', colorEnd: '#FFFFFF' });
