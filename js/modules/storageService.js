const hasUserTask = key => localStorage.getItem(key) !== null ? true : false;

export const getUserTasks = key => {
    const dataFromStore = localStorage.getItem(key);
    return new Map(JSON.parse(dataFromStore));
};

const setMapToStorage = (key, map) => {
    localStorage.setItem(key, JSON.stringify(map));
};

export const addNewTask = (key, userTask) => {
    userTask.id = Math.random().toString().substring(2, 10);

    if (hasUserTask) {
        const userTasks = getUserTasks(key);
        userTasks.set(userTask.id, userTask);
        setMapToStorage(key, (Array.from(userTasks.entries())));
    }
    else {
        const userTasks = new Map();
        userTasks.set(userTask.id, userTask);
        setMapToStorage(key, (Array.from(userTasks.entries())));
    }

    return userTask.id;
}

export const deleteTask = (key, taskId) => {
    const tasks = getUserTasks(key);
    tasks.delete(taskId);
    setMapToStorage(key, Array.from(tasks.entries()));
};

export const editTask = (key, id, textContent) => {
    const tasks = getUserTasks(key);
    const task = tasks.get(id);
    task.taskName = textContent;
    tasks.set(id, task);
    setMapToStorage(key, Array.from(tasks.entries()));
};

export const endTask = (key, id) => {
    const tasks = getUserTasks(key);
    const task = tasks.get(id);
    task.status = 1;
    tasks.set(id, task);
    setMapToStorage(key, Array.from(tasks.entries()));
};