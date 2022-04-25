import { initElements } from './modules/creatingElements.js';
import { initEvents } from './modules/eventService.js';
import { renderTable } from './modules/renderElements.js';

initElements();
renderTable('keyNurs');
initEvents('keyNurs');