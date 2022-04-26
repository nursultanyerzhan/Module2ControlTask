import { initElements } from './creatingElements.js';
import { initEvents } from './eventService.js';
import { renderTable } from './renderElements.js';

const createModal = () => {
    const appContainer = document.querySelector('.app-container');

    const divContainer = document.createElement('div');
    divContainer.className = 'smodal';
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.right = '0';
    overlay.style.left = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'rgba(0, 0, 0, .5)';

    const modalWindow = document.createElement('div');
    modalWindow.style.width = '280px';
    modalWindow.style.height = '200px';
    modalWindow.style.borderRadius = '5px';
    modalWindow.style.background = '#fff';
    modalWindow.style.margin = '100px auto';
    modalWindow.style.padding = '2%';

    const label = document.createElement('label');
    label.style.padding = '2%';
    label.textContent = 'Добро пожаловать !';

    const form = document.createElement('form');
    form.id = 'formLogin';

    const input = document.createElement('input');
    input.name = 'login';
    input.placeholder = 'введите ваш логин';

    appContainer.append(divContainer);
    divContainer.append(overlay);
    overlay.append(modalWindow);
    modalWindow.append(label,form);
    form.append(input);
};

export const initAuthorize = () => {
    createModal();
    const formLogin = document.querySelector('#formLogin');
    formLogin.addEventListener('submit', e => {
        e.preventDefault();

        const modal = document.querySelector('.smodal');
        modal.style.display = 'none';

        initElements();
        renderTable(formLogin.login.value);
        initEvents(formLogin.login.value);
    });
};

