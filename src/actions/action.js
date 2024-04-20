//Adding a todo item.
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

//Delete a todo item.
export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo,
    }
}

//Toggle the value of 'completed' on a todo item.
export const toggleStatus = (todo) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: todo,
    }
}

//View all the items.
export const toggleView = (view) => {
    return {
        type: 'TOGGLE_VIEW',
        payload: view,
    }
}