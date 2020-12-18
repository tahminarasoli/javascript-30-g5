// imports function from handlers and {trigger} variable from data.js.


import { triggers } from "../data.js";
import { handleLeave } from "../handlers/leave.js";



// handleLeave function call
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));