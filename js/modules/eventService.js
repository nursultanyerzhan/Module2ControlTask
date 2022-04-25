import * as storageService from './storageService.js';



const resetTask = () => {
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.setAttribute('disabled', true);

    const inputAddTask = document.querySelector('input');
    inputAddTask.value = '';
};

const deleteTask = () => {

};

export const initEvents = (key) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const target = e.target;
        console.log(target.task.value);
        resetTask();
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
            }
        }
    });
};