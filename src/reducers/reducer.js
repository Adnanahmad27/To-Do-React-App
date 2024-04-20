import {legacy_createStore as createStore} from 'redux';

const reducer = (state = {todos: [], view: ''}, action) => {
    
    //adding a new todo item to the state
    if(action.type === 'ADD_TODO') {
        const newTodo = {id: state.todos.length + 1, task: action.payload, completed: false};
        return {
            todos: [...state.todos, newTodo],
            view: state.view
        };
    }

    //deleting a todo item from the state and assigning ids again to the rest of the items
    //in order to avoid duplication of ids on further addition of items
    if(action.type === 'DELETE_TODO') {
        const newTodos = state.todos.filter(todo => todo.id !== action.payload.id).map((todo, index) => {
            todo.id = index + 1;
            return todo;
        })
        return {
            todos: newTodos,
            view: state.view
        };
    }

    //toggling the value of 'completed' on the selected todo item - the value is either true or false
    if(action.type === 'TOGGLE_STATUS') {
        return {
            todos: [...state.todos.map(todo => {
                return todo.id === action.payload.id ? {
                    id: todo.id,
                    task: todo.task,
                    completed: !todo.completed
                } : todo;
            })],
            view: state.view
        };
    }

    //modifying the value of 'view' to the one selected by the user
    if(action.type === 'TOGGLE_VIEW'){
        return {
            todos: state.todos,
            view: action.payload
        };
    }

    return state;
}

const store = createStore(reducer);
export default store;