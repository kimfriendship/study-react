import React, { useEffect, useReducer } from "react";
import { moviesApi } from "../api";
import { NavLink } from "react-router-dom";

const pageReducer = (pageState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.data,
        error: null,
        history: null,
        loading: false,
      };
    case "ERROR":
      return {
        data: null,
        error: action.error,
        history: null,
        loading: false,
      };
    case "LOADING":
      return {
        data: null,
        error: null,
        history: null,
        loading: true,
      };
    default:
      throw new Error("ERROR");
  }
};

const termReducer = (termState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        input: action.input,
        term: "",
      };
    case "GET":
      return {
        input: "",
        term: action.term,
      };
    default:
      throw new Error("ERROR");
  }
};

const Search = () => {
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    data: null,
    error: null,
    history: null,
    loading: false,
  });

  const [termState, termDispatch] = useReducer(termReducer, {
    input: "",
    term: "",
  });

  const { input, term } = termState;

  const changeInput = (e) => {
    termDispatch({ type: "CHANGE", input: e.target.value });
  };

  const getInput = (e) => {
    if (e.key !== "Enter") return;
    termDispatch({ type: "GET", term: e.target.value });
  };

  const searchMovies = async () => {
    pageDispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.searchMovies(term);
      pageDispatch({ type: "SUCCESS", data: response.data.results });
    } catch (e) {
      pageDispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    searchMovies();
  }, [term]);

  return (
    <div className={"searchWrapper"}>
      <input
        className={"searchBox"}
        placeholder={"Search movies!"}
        type="text"
        onChange={changeInput}
        onKeyUp={getInput}
        value={input}
      />
      <ul className={"historyList"}>
        <li className={"history"}>history</li>
      </ul>
      <ul className={"movieList"}>
        {pageState.data &&
          pageState.data.map((movie) => {
            return (
              <li className={"movie"} key={movie.id}>
                <NavLink
                  to={"/" + movie.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    className={"poster"}
                    src={
                      movie.poster_path &&
                      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }
                    alt={movie.title}
                  />
                  <span className={"upcomingTitle"}>{movie.title}</span>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Search;
