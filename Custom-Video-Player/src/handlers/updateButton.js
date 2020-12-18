'use strict';
/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.toggle'
 */
const toggle = player.querySelector('.toggle');

/**
 * Toggle the icon on the play/stop button
 *
 * @return {string} '►' or  '❚ ❚'
 *
 */
export function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}