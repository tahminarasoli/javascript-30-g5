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
 * A toggle function, if the video is paused set its state to 'play', if the video set its state to 'pause'
 *
 * @return {string} 'play' or 'pause'
 *
 */
export function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}