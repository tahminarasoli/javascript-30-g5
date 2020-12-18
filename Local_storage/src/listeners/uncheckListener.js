
import { uncheckAll } from '../handlers/uncheckAllHandle.js'

export const uncheckListener = document.querySelector('#uncheckAll');
uncheckListener.addEventListener('click', uncheckAll);