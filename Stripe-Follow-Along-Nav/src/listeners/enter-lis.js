// imports function from handlers and {trigger} variable from data.js.
import { triggers } from "../data.js";
import { handleEnter } from "../handlers/enter.js";



// handleEnter function call
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));