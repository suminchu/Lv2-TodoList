// Action Types
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

// Action Creators
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

// Initial State
const initialState = [];

// Reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export default todosReducer;