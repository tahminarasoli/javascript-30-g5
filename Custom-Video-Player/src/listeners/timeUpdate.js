'use strict';

import { handleProgress } from '../handlers/handleProgress.js';
/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.viewer'
 */
const video = player.querySelector('.viewer');

/**
 * @param  {} 'timeupdate'
 * @param  {} handleProgress
 */
video.addEventListener('timeupdate', handleProgress);