export const getInitialTasks = () => {
    return {
        type: 'GET_TASKS',

    }
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
}

export const taskCompletion = (task) => {
    return {
        type: 'TASK_COMPLETION',
        task
    }
}

export const taskDeletion = (task) => {
    return {
        type: 'TASK_DELETION',
        task
    }
}

export const test = () => {
    return {
        type: 'TEST',

    }
}