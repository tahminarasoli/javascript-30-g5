'use strict';

import { setmousedown } from '../data.js';

/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.progress'
 */
const progress = player.querySelector('.progress');

/**
 * @param  {} 'mouseup'
 * @param  {} =>setmousedown(false)
 */
progress.addEventListener('mouseup', () => setmousedown(false));