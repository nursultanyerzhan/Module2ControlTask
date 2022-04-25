const hasUserTask = key => localStorage.getItem(key) !== null ? true : false;

const getUserTasks = key => {
    const dataFromStore = localStorage.getItem(key);
    return new Map(JSON.parse(dataFromStore));
};

const setMapToStorage = (key, map) => {
    localStorage.setItem(key, JSON.stringify(map));
};

const addNewTask = (key, userTask) => {
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
}

export const deleteTask = (key, taskId) => {
    const tasks = getUserTasks(key);
    tasks.delete(taskId);
    setMapToStorage(key, Array.from(tasks.entries()));
};

const editTask = (key, editedTask) => {
    const tasks = getUserTasks(key);
    tasks.set(editedTask.id, editedTask);
    setMapToStorage(key, Array.from(tasks.entries()));
};