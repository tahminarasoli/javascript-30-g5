import {toggle} from  '../handlers/toggle.js';

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => toggle(false));
