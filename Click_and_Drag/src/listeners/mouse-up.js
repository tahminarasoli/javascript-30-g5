'use strict';

import { data } from '../data.js';

const slider = document.querySelector('.items');


slider.addEventListener('mouseup', () => {
    console.log('mouseup');
    data.isDown = false;
    slider.classList.remove('active');
  });
