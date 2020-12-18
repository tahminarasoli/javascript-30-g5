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
 * @param  {} 'mousedown'
 * @param  {} =>setmousedown(true)
 */
progress.addEventListener('mousedown', () => setmousedown(true));