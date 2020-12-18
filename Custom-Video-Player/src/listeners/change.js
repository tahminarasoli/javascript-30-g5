'use strict';

import { handleRangeUpdate } from '../handlers/handleRangeUpdate.js';
/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.player__slider'
 */
const ranges = player.querySelectorAll('.player__slider');
/**
 * @param  {} range=>range.addEventListener('change')
 * @param  {} handleRangeUpdate
 */
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));