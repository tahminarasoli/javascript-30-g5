'use strict';

/*
  nice job brouping related handlers together, i'd just suggest a different file name
  instead of naming this after the event you listen for
  you could name the file control-panel (or similar) to show what part of the UI you are listening to
*/


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
