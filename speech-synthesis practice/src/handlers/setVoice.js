import { toggle } from './toggle.js';

// function of setvoice in handlers file 
 
const msg = new SpeechSynthesisUtterance();
let voices = [];
console.log(msg);
export  function setVoice() {
msg.voice = voices.find(voice => voice.name === this.value);
toggle();
}
