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
 * @param  {} '.progress'
 */
const progress = player.querySelector('.progress');

/**
 * Set the current time for the video according to the x offest
 *
 * @param {string} e - An event
 * @return {number} a number
 *

 */
export function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}