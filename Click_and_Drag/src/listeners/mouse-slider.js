'use strict';

import { data } from '../data.js';

console.log(data);

const slider = document.querySelector('.items');
let startX;
let scrollLeft; 

slider.addEventListener('mousedown', (e) => {
  data.isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log('mousedown', startX, scrollLeft);
  data.startX = startX;
  data.scrollLeft = scrollLeft;
});