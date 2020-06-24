/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

import { ScrollScene } from 'scrollscene';

const triggerNode = document.querySelector('#trigger1');
const changedNode = document.querySelector('#animate1');

const scrollScene = new ScrollScene({
  triggerElement: triggerNode,
  toggle: {
    element: changedNode,
    className: 'blank',
  },
  duration: 300,
  triggerHook: 0,
  controller: {
    logLevel: 3,
  },
});

scrollScene.Scene.setPin('#pinnedElem');

scrollScene.Scene.addIndicators({
  name: 'pin scene duration 300',
  colorEnd: '#FFFFFF',
});
