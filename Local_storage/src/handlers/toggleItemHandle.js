
import { items } from '../../data/data.js';

import { populateList } from '../handlers/showItemHandle.js';
import { itemsList } from '../listeners/toggleMenuItem.js'

export function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;    
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }