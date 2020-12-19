import {setVoice} from '../handlers/setVoice.js';

const voicesDropdown = document.querySelector('[name="voice"]');
voicesDropdown.addEventListener('change', setVoice);
