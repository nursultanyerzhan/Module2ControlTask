import * as storageService from './storageService.js';
import * as creatingElements from './creatingElements.js';
import { renderTableOrderNumbers } from './renderElements.js';


const resetTask = () => {
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.setAttribute('disabled', true);

    const inputAddTask = document.querySelector('input');
    inputAddTask.value = '';
};



export const initEvents = (key) => {

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const task = new Object();
        task.taskName = e.target.task.value;
        task.status = 0;
        task.importance = e.target.importance.value;
        task.id = storageService.addNewTask(key, task);

        const tbody = document.querySelector('tbody');
        tbody.append(creatingElements.createRow(task.id, task.taskName, 0, task.importance));
        resetTask();
        renderTableOrderNumbers();
    });

    form.addEventListener('reset', resetTask);

    const inputAddTask = document.querySelector('input');
    inputAddTask.addEventListener('keyup', e => {
        e.preventDefault();
        const submitBtn = document.querySelector('button[type="submit"]');
        if (inputAddTask.value.length > 0)
            submitBtn.removeAttribute('disabled');
        else
            submitBtn.setAttribute('disabled', true);
    });


    const table = document.querySelector('table');
    table.addEventListener('click', e => {
        const target = e.target;
        if (target.className.includes('btn-danger')) {
            const confirming = confirm('Вы действительно хотите удалить?');
            if (confirming) {
                const tr = target.closest('tr');
                const taskId = tr.getAttribute('data-id');
                tr.remove();
                storageService.deleteTask(key, taskId);
                renderTableOrderNumbers();
            }
        }

        if (target.className.includes('btn-success')) {
            const tr = target.closest('tr');
            const taskId = tr.getAttribute('data-id');
            tr.className = 'table-success';
            tr.children[1].className = 'text-decoration-line-through';
            tr.children[2].textContent = 'Выполнена';
            storageService.endTask(key, taskId);
        }
    });

    table.addEventListener('keypress', e => {
        const target = e.target;
        if (e.key === 'Enter') {
            e.preventDefault();
            const tr = target.closest('tr');
            const taskId = tr.getAttribute('data-id');
            const textTask = tr.children[1].textContent;
            storageService.editTask(key, taskId, textTask);
        }
    });
};