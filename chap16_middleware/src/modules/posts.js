import * as postAPI from "../api/postApi";
import { reducerUtils } from "../lib/reducerUtils";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const posts = await postAPI.getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPostById = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await postAPI.getPostById(id);
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(),
      };
    default:
      return state;
  }
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(),
      };
    default:
      return state;
  }
};
