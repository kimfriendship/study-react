// action type
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// action creator
let nextId = 0;
export const addTodo = (item) => ({
  type: ADD_TODO,
  todo: { id: nextId++, item, done: false },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// initial state
const initialState = [];

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default todos;
