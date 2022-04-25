
const createTitle = () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Todo App';
    return h3;
};

const createForm = () => {

    const form = document.createElement('form');
    form.classList.add('d-flex', 'align-items-center', 'mb-3');

    const label = document.createElement('label');
    label.classList.add('form-group', 'me-3', 'mb-0');

    const input = document.createElement('input');
    input.classList.add('form-control');
    input.name = 'task';
    input.type = 'text';
    input.placeholder = 'ввести задачу';

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('btn', 'btn-primary', 'me-3');
    buttonSubmit.type = 'submit';
    buttonSubmit.textContent = 'Сохранить';
    buttonSubmit.disabled = 'disabled';
    
    const buttonReset = document.createElement('button');
    buttonReset.classList.add('btn', 'btn-warning');
    buttonReset.type = 'reset';
    buttonReset.textContent = 'Очистить';

    form.append(label,buttonSubmit,buttonReset );
    label.append(input);

    return form;
};

const createTableWrapper = () => {
    const div = document.createElement('div');
    div.className='table-wrapper';

    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-bordered');

    const thead = document.createElement('thead');
    const thNumber = document.createElement('th');
    thNumber.textContent = '№';
    const thTask = document.createElement('th');
    thTask.textContent = 'Задача';
    const thStatus = document.createElement('th');
    thStatus.textContent = 'Статус';
    const thEvent = document.createElement('th');
    thEvent.textContent = 'Действия';
    thead.append(thNumber, thTask, thStatus, thEvent);

    const tbody = document.createElement('tbody');

    div.append(table);
    table.append(thead, tbody);
    tbody.append(createRow(1,13,'Купить слона', 1));
    tbody.append(createRow(1,115,'Помыть кота', 0));

    return div;
}

const createRow = (number, id, task, status) => {
    const tr = document.createElement('tr');
    tr.className = status === 1 ? 'table-success': 'table-light';
    tr.setAttribute('data-id', id)
    const tdNumber = document.createElement('td');
    tdNumber.textContent = number;
    const tdTask = document.createElement('td');
    tdTask.textContent = task;
    tdTask.className = status === 1 ? 'text-decoration-line-through' : 'task';
    const tdStatus = document.createElement('td');
    tdStatus.textContent = status === 1 ? 'Выполнена' : 'В процессе';
    
    const tdEvent = document.createElement('td');
    const btnDel = document.createElement('button');
    btnDel.classList.add('btn', 'btn-danger');
    btnDel.textContent = 'Удалить';
    const btnEnd = document.createElement('button');
    btnEnd.classList.add('btn', 'btn-success');
    btnEnd.textContent = 'Завершить';
    tdEvent.append(btnDel, btnEnd);

    tr.append(tdNumber, tdTask, tdStatus, tdEvent);

    return tr;
};

export const initElements = () => {
    const appContainer = document.querySelector('.app-container');
    appContainer.classList.add('vh-100', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');
    
    const title = createTitle();
    const form = createForm();
    const tableWrapper = createTableWrapper();

    appContainer.append(title, form, tableWrapper);
};