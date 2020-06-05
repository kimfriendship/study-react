import { combineReducers } from "redux";
import counter from "./counter.js";
import posts from "./posts.js";

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
