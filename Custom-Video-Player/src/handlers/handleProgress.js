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
 * @param  {} '.progress__filled'
 */
const progressBar = player.querySelector('.progress__filled');

/**
 * update the progress bar style.
 *
 * @return {string} A string
 */
export function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}