import { initElements } from './modules/creatingElements.js';
import { initEvents } from './modules/eventService.js';
import { renderTable } from './modules/renderElements.js';

const key = prompt('Ваш логин: ');
initElements();
renderTable(key);
initEvents(key);