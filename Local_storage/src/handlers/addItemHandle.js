
import { items } from '../../data/data.js';

import { populateList } from './showItemHandle.js';
import { itemsList } from '../listeners/toggleMenuItem.js';

export function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    // console.log(this.querySelector('[name=item]'))
    // console.log(e.target.querySelector('[name=item]'))
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    // this.reset();
    e.target.reset();

}