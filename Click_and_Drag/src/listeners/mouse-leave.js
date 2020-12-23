'use strict';

import { data } from '../data.js';

const slider = document.querySelector('.items');

slider.addEventListener('mouseleave', () => {
    data.isDown = false;
    slider.classList.remove('active');
  });