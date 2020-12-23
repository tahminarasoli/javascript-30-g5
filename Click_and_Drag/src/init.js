'use strict';

// import all listener files so they can attach to the DOM
import './listeners/mouse-leave.js';
import './listeners/mouse-scroll.js';
import './listeners/mouse-slider.js';
import './listeners/mouse-up.js';

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;