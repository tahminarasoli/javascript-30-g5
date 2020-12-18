

// imports global variable from data.js file.
import { background } from "../data.js";


// this function handle 'leave' event.
export function handleLeave() {
    // access css class.
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  // remove the retangle when the menue is left.
  background.classList.remove('open');
}