import React, { useEffect, useReducer } from "react";
import { moviesApi } from "../api";

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: null,
        error: null,
        history: null,
        loading: false,
        inputs: "",
      };
    case "ERROR":
      return {
        data: null,
        error: null,
        history: null,
        loading: false,
        inputs: "",
      };
    case "LOADING":
      return {
        data: null,
        error: null,
        history: null,
        loading: false,
        inputs: "",
      };
    default:
      throw new Error("ERROR");
  }
};

const Search = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    history: null,
    loading: false,
    inputs: "",
  });

  const getInputs = (e) => {
    // if (e.)
  };

  const searchMovies = async (term) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.searchMovies(term);
      console.log(response);
      dispatch({ type: "SUCCESS", data: response });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  return (
    <div className={"searchWrapper"}>
      <input
        className={"searchBox"}
        placeholder={"Search movies!"}
        type="text"
      />
      <ul className={"historyList"}>
        <li className={"history"}>history</li>
      </ul>
      <ul className={"movieList"}>
        <li className={"movies"}>movies</li>
      </ul>
    </div>
  );
};

export default Search;
