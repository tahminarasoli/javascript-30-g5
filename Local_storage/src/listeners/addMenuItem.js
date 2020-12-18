
import { addItem } from '../handlers/addItemHandle.js';

export const addItems = document.querySelector('.add-items');
addItems.addEventListener('submit', addItem);