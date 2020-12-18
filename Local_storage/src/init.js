// data
import { items } from '../data/data.js';

// listeners
import { addItems } from './listeners/addMenuItem.js';
import { itemsList } from './listeners/toggleMenuItem.js';
import { clearListener } from './listeners/clearListener.js';
import { checkListener } from './listeners/checkListener.js';
import { uncheckListener } from './listeners/uncheckListener.js';

// handlers
import { populateList } from './handlers/showItemHandle.js';


populateList(items, itemsList);