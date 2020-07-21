import { createStore } from "redux";

// initial state
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// action type
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_LIST = "ADD_LIST";

// action creator
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const changeText = (text) => ({ type: CHANGE_TEXT, text });
const addList = (item) => ({ type: ADD_LIST, item });

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "ADD_LIST":
      return {
        ...state,
        list: [...state.list, action.item],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("hello"));
store.dispatch(addList({ id: 1, text: "lala" }));

window.store = store;
window.unsubscribe = unsubscribe;
