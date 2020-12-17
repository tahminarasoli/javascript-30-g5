// import global variables from data.js file.

import { background } from "../data.js";
import { nav } from "../data.js";

/**
 * this function will handle 'enter' event.
 * 
 */

export function handleEnter() {
    // access css class
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    // background is the white rectangle appears in the backround of the dropdown menu.
    background.classList.add('open');
  
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
  
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      // to make it sticky with dropdown.
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };
   // the rectangle will follow the dropdown.
   // by moving to bigger or smaller dropdown the rectangle will change its size accordingly
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }