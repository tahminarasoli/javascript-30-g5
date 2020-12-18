
import { toggleDone } from '../handlers/toggleItemHandle.js';

export const itemsList = document.querySelector('.plates');
itemsList.addEventListener('click', toggleDone);