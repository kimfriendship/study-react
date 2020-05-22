import React, { useEffect, useReducer } from "react";
import { moviesApi } from "../api";
import { NavLink } from "react-router-dom";

export const pageReducer = (pageState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: action.data,
        error: null,
        loading: false,
      };
    case "ERROR":
      return {
        data: null,
        error: action.error,
        loading: false,
      };
    case "LOADING":
      return {
        data: null,
        error: null,
        loading: true,
      };
    default:
      throw new Error("ERROR");
  }
};

export const termReducer = (termState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        input: action.input,
        term: "",
        history: [...termState.history],
      };
    case "GET":
      return {
        input: "",
        term: action.term,
        history: [...termState.history, action.history],
      };
    default:
      throw new Error("ERROR");
  }
};

const Search = () => {
  const [pageState, pageDispatch] = useReducer(pageReducer, {
    data: null,
    error: null,
    loading: false,
  });

  const [termState, termDispatch] = useReducer(termReducer, {
    input: "",
    term: "",
    history: [],
  });

  const { input, term, history } = termState;

  const changeInput = (e) => {
    termDispatch({ type: "CHANGE", input: e.target.value });
  };

  const getInput = (e) => {
    if (e.key !== "Enter") return;
    const newTerm = e.target.value;
    termDispatch({ type: "GET", term: newTerm, history: newTerm });
  };

  const searchMovies = async (word = term) => {
    pageDispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.searchMovies(word);
      pageDispatch({ type: "SUCCESS", data: response.data.results });
    } catch (e) {
      pageDispatch({ type: "ERROR", error: e });
    }
  };

  const clickHistory = (e) => {
    searchMovies(e.target.textContent);
  };

  useEffect(() => {
    if (!term) return;
    searchMovies();
  }, [term]);

  const { loading, error, data } = pageState;
  if (loading) {
    return (
      <div className={"loadingWrapper"}>
        <img
          className={"loading"}
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="loading"
        />
      </div>
    );
  }
  if (error) return <div>ERROR</div>;

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
        {history &&
          history.map((h, i) => {
            return (
              <li
                key={i}
                value={h}
                className={"history"}
                onClick={clickHistory}
              >
                {h}
              </li>
            );
          })}
      </ul>
      <ul className={"searchList"}>
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
