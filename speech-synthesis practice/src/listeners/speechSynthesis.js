import {populateVoices} from '../handlers/populateVoice.js'
speechSynthesis.addEventListener('voiceschanged', populateVoices);