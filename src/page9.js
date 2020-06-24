/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

import { ScrollScene } from 'scrollscene';

const trigger1 = document.querySelector('#trigger1');
const changeNode = document.querySelector('#animate1');

const scrollScene1 = new ScrollScene({
  triggerElement: trigger1,
  toggle: {
    element: changeNode,
    className: 'blank',
  },
  duration: '100%',
  triggerHook: 0,
  controller: {
    logLevel: 3,
  },
});

scrollScene1.Scene.setPin('#animate1');

scrollScene1.Scene.on('enter', function (event) {
  console.log('scene entered');
});

scrollScene1.Scene.on('leave', function (event) {
  console.log('scene left');
});

scrollScene1.Scene.addIndicators({});
