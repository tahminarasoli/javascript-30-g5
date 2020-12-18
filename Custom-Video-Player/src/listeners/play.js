'use strict';

import { updateButton} from '../handlers/updateButton.js';
/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.viewer'
 */
const video = player.querySelector('.viewer');

/**
 * @param  {} 'play'
 * @param  {} updateButton
 */
video.addEventListener('play', updateButton);