
import { items } from '../../data/data.js';

import { populateList } from './showItemHandle.js';
import { itemsList } from '../listeners/toggleMenuItem.js';

export const clearAll = () => {
    localStorage.clear();
    items.splice(0, items.length)
    populateList(items, itemsList);
}