
const createTitle = () => {
    const h3 = document.createElement('h3');
    h3.textContent = 'Todo App';
    return h3;
};

const createOption = (value, textContent) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = textContent;

    return option;
};

const createSelect = () => {
    const select = document.createElement('select');
    select.className = 'form-select';
    select.name = 'importance';

    select.append(createOption(1, 'обычная'), createOption(2, 'важная'), createOption(3, 'срочная'));
    return select;
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

    const select = createSelect();

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('btn', 'btn-primary', 'me-3');
    buttonSubmit.type = 'submit';
    buttonSubmit.textContent = 'Сохранить';
    buttonSubmit.disabled = 'disabled';

    const buttonReset = document.createElement('button');
    buttonReset.classList.add('btn', 'btn-warning');
    buttonReset.type = 'reset';
    buttonReset.textContent = 'Очистить';

    form.append(label, select, buttonSubmit, buttonReset);
    label.append(input);

    return form;
};

const createTableWrapper = () => {
    const div = document.createElement('div');
    div.className = 'table-wrapper';

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

    return div;
}

const defineTrClassName = (status, importance) => {
    if (status === 1)
        return 'table-success';
    
    switch (importance) {
        case '1': return 'table-light';
        case '2': return 'table-warning';
        case '3': return 'table-danger';
    }
};

export const createRow = (id, task, status, importance) => {
    const tr = document.createElement('tr');
    tr.className = defineTrClassName(status, importance);
    tr.setAttribute('data-id', id)
    const tdNumber = document.createElement('td');
    tdNumber.textContent = '#';
    const tdTask = document.createElement('td');
    tdTask.textContent = task;
    tdTask.setAttribute('contenteditable', true);
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