'use strict';


import { togglePlay } from '../handlers/togglePlay.js';
import { skip } from '../handlers/skip.js';
import { scrub } from '../handlers/scrub.js';

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
 * @param  {} '.toggle'
 */
const toggle = player.querySelector('.toggle');

/**
 * @param  {} '[data-skip]'
 */
const skipButtons = player.querySelectorAll('[data-skip]');


/**
 * @param  {} 'click'
 * @param  {} togglePlay
 */
video.addEventListener('click', togglePlay);
/**
 * @param  {} 'click'
 * @param  {} togglePlay
 */
toggle.addEventListener('click', togglePlay);
/**
 * @param  {} button=>button.addEventListener('click')
 * @param  {} skip
 */
skipButtons.forEach(button => button.addEventListener('click', skip));
/**
 * @param  {} 'click'
 * @param  {} scrub
 */
progress.addEventListener('click', scrub);