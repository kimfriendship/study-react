import React from "react";
import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_INPUT = "CHANGE_INPUT";
const ADD_TODO = "ADD_TODO";

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeInput = (text) => ({
  type: CHANGE_INPUT,
  text,
});

const addTodo = (item) => ({
  type: ADD_TODO,
  item,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TODO:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

window.store = store;
window.unsubscribe = unsubscribe;

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeInput("hello"));
store.dispatch(addTodo({ id: 1, text: "good night" }));

const Exercise = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Exercise;
