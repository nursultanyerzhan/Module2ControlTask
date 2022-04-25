import { getUserTasks } from './storageService.js';
import { createRow } from './creatingElements.js';

export const renderTable = (key) => {
    const userTaskList = getUserTasks(key);
    const tbody = document.querySelector('tbody');
    userTaskList.forEach(task => {
        tbody.append(createRow(task.id, task.taskName, task.status));
    });
}