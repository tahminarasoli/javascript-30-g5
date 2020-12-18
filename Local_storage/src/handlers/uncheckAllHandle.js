
import { items } from '../../data/data.js';

import { populateList } from './showItemHandle.js';
import { itemsList } from '../listeners/toggleMenuItem.js';

export function uncheckAll() {

    items.map(item => {
        item.done = false
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}