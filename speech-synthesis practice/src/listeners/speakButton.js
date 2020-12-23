import {toggle} from '../handlers/toggle.js'

const speakButton = document.querySelector('#speak');
speakButton.addEventListener('click', toggle);