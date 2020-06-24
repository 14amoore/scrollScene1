/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

import { ScrollScene } from 'scrollscene';

// getting refferences to all of the html elements we're going to me using or manipulating using the scrollscene library
const trigger1 = document.querySelector('#trigger1');
const changeNode = document.querySelector('#animate1');
const image1 = document.querySelector('#image1');
const text1 = document.querySelector('#text1');

const trigger2 = document.querySelector('#trigger2');
const changeNode2 = document.querySelector('#animate2');
const image2 = document.querySelector('#image2');
const text2 = document.querySelector('#text2');

// here we create a new scrollscene the triggerElement is where scrollscene begins working, and the toggle element is where the changes take place. We're adding a className black because we're not using a new class name to manipulate the scene. reverse: true means that the changes will go back if the users scrolls back up.
const scrollScene1 = new ScrollScene({
  triggerElement: trigger1,
  toggle: {
    element: changeNode,
    className: 'blank',
    reverse: true,
  },
  duration: '100%',
  triggerHook: 0,
  controller: {
    logLevel: 3,
  },
});

// animate1 is the id of the element we are pinning in position while the user scrolls through the first stanza.
scrollScene1.Scene.setPin('#animate1');

// the below commented out code shows the basics of writing event driven code in scrollscene
// scrollScene1.Scene.on('enter', function (event) {
//   console.log('scene entered');
// });

// scrollScene1.Scene.on('leave', function (event) {
//   console.log('scene left');
// });

// here we are using scrollscene's progress to measure a users progress through the div, and trigger events as they scroll through the div. event.progress gives us values between 0 and 1.
scrollScene1.Scene.on('progress', function (event) {
  // console.log(`Scene progress ${event.progress}`);
  if (event.progress >= 0.5) {
    image1.src = '../assets/Screenshot 2020-06-17 14.56.31.png';
    image1.alt = 'Second image from Jess.';
    text1.innerHTML =
      'Prime number courage of our questions?<br />Are creatures of the cosmos pretty.<br />Permanence of the stars the sky';
  } else {
    image1.src = '../assets/Screenshot 2020-06-17 14.56.12.png';
    image1.alt = 'First image from Jess.';
    text1.innerHTML =
      'Rich in mystery light years, centuries.<br /> How far away tingling, spine, hearts.<br /> With pretty stories for which bits?';
  }
});

// indicators are a nice debuggin tool I've left in so you can see how the library works. Just comment, or delete them before deployment.
scrollScene1.Scene.addIndicators({});

// this is the exact same code as above but replicated for either new images or new stanzas.
const scrollScene2 = new ScrollScene({
  triggerElement: trigger2,
  toggle: {
    element: changeNode2,
    className: 'blank',
    reverse: true,
  },
  duration: '100%',
  triggerHook: 0,
  controller: {
    logLevel: 3,
  },
});

scrollScene2.Scene.setPin('#animate2');

scrollScene2.Scene.on('progress', function (event) {
  console.log(`Scene2 progress ${event.progress}`);
  if (event.progress >= 0.5) {
    image2.src = '../assets/Screenshot 2020-06-17 14.56.12.png';
    image2.alt = 'First image from Jess.';
    text2.innerHTML =
      'A mote of dust suspended,sunbeam.<br /> Two ghostly white figures in coveralls.<br />Dispassionate extraterrestrial observer two ghostly white.';
  } else {
    image2.src = '../assets/Screenshot 2020-06-17 14.56.31.png';
    image2.alt = 'Second image from Jess.';
    text2.innerHTML =
      'Billions upon billions Flatland Sea Tranquility.<br />Great turbulent clouds a mote dust.<br />Stirred by starlight corpus callosum dream.';
  }
});

scrollScene2.Scene.addIndicators({});
