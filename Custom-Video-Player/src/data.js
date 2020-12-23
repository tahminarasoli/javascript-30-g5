'use strict';

/*
  it's a clever idea to create a setter function, but then this file is no longer just data
  
  the "better" way to do this would be to set a .mousedown property in an exported object
  then all files can read/write this property and by side-effect will always have the up-to-date data
  using an object to store all your program's data is the objective in the next module, so you're just on time
  
  (i also can't find anywhere in your project that this variable is read, only set)
*/

/**
 * 
 * @type {boolean}
 */
export let mousedown = false;

/**
 * setter to change mousedown variable
 *
 * @param {boolean} bool - A boolean
 * @return {string} mousedown = bool, a boolean 
 *
 */
export function setmousedown(bool) {
  mousedown = bool;
}
