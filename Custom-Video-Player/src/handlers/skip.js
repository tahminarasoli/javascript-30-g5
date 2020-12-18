
'use strict';

/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.viewer'
 */
const video = player.querySelector('.viewer');

/**
 * Increment the current time by x
 * @return {number} A number
 *
 */
export function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}