import { getUserTasks } from './storageService.js';
import { createRow } from './creatingElements.js';

export const renderTableOrderNumbers = () => {
    const tbody = document.querySelector('tbody');
    for (let i = 0; i < tbody.children.length; i++) {
        const child = tbody.children[i];
        child.children[0].textContent = i + 1;
    }
};

export const renderTable = (key) => {
    const userTaskList = getUserTasks(key);
    const tbody = document.querySelector('tbody');
    userTaskList.forEach(task => {
        tbody.append(createRow(task.id, task.taskName, task.status));
    });
    renderTableOrderNumbers();
}

