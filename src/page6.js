/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
import { ScrollScene } from 'scrollscene';

// you have to create variables to hold references to the dom elements in scrollScene unlike in scrollmagic
const trig1 = document.querySelector('#trigger1');
const anim1 = document.querySelector('#animate1');
const endChange = document.querySelector('#endChange');
const midChange = document.querySelector('#midChange');
const scrollCount = document.querySelector('#scrollCount');

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
    logLevel: 1,
  },
});

scrollScene.Scene.on('enter', function (event) {
  midChange.innerHTML = 'You have entered the scene.';
});

scrollScene.Scene.on('enter', function (event) {
  endChange.innerHTML =
    'When you leave the scene it will be logged to the console.';
});

scrollScene.Scene.on('progress', function (event) {
  console.log(`Scene progress ${event.progress}`);
});

scrollScene.Scene.on('progress', function (event) {
  scrollCount.innerHTML = `Your position is ${event.progress}`;
});

scrollScene.Scene.on('leave', function (event) {
  endChange.innerHTML = 'You have left the scene.';
});

scrollScene.Scene.on('leave', function (event) {
  midChange.innerHTML =
    'When this text reaches the top of the screen the div will turn pink.';
});

scrollScene.Scene.addIndicators({ name: 'pink scene', colorEnd: '#FFFFFF' });
