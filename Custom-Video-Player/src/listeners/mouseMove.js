'use strict';

import { setmousedown } from '../data.js';
import { handleRangeUpdate } from '../handlers/handleRangeUpdate.js';

/**
 * @param  {} '.player'
 */
const player = document.querySelector('.player');
/**
 * @param  {} '.progress'
 */
const progress = player.querySelector('.progress');
/**
 * @param  {} '.player__slider'
 */
const ranges = player.querySelectorAll('.player__slider');

/**
 * @param  {} range=>range.addEventListener('mousemove')
 * @param  {} handleRangeUpdate
 */
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
/**
 * @param  {} 'mousemove'
 * @param  {} e
 * @param  {} =>setmousedown(true)
 * @param  {} &&scrub(e)
 */
progress.addEventListener('mousemove', (e) => setmousedown(true) && scrub(e));