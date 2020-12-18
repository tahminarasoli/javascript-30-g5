
import { items } from '../../data/data.js';

import { populateList } from './showItemHandle.js';
import { itemsList } from '../listeners/toggleMenuItem.js';

export const checkAll = () => {

    items.map(item => {
        item.done = true
    });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}