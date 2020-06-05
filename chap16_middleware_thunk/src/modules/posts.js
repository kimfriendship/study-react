import * as postAPI from "../api/postApi";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";

// actions
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const CLEAR_POST = "CLEAR_POST";

// action cretators
export const clearPost = () => ({ type: CLEAR_POST });
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPostById = createPromiseThunkById(
  GET_POST,
  postAPI.getPostById
);
export const goToHome = () => async (dispatch, getState, { history }) => {
  history.push("/");
};

// initial state
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

// reducers
const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
};

export default posts;
