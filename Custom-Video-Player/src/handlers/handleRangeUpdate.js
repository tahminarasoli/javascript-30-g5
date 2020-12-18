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
 * updates the property of video (volume or playbackrate).
 *
 * @return {string} A good string
 *
 */
export function handleRangeUpdate() {
    video[this.name] = this.value;
}