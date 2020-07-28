export default (state, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return {
                ...state,
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            }
        case 'TASK_COMPLETION':
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.task.id) {
                        let completion = !task.completed
                        return Object.assign({}, task, {
                            completed: completion
                        })
                    }
                    return task
                })
            }
        case 'TASK_DELETION':
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            }
        default:
            return state
    }
}