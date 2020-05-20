import React, { useReducer, useEffect } from "react";
import { moviesApi } from "../api";
import "../App.css";

const reducer = (state, action) => {
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

const Latest = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchLatest = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.getUpcoming();
      dispatch({ type: "SUCCESS", data: response.results });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  const { data: movies, error, loading } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!movies) return <div>NO DATA</div>;

  return (
    <>
      <ul className={"movieList"}>
        {movies.map((movie, order) => {
          return (
            <li className={"movie"} key={movie.id}>
              <img
                className={"poster"}
                src={
                  movie.poster_path &&
                  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
                alt={movie.title}
              />
              <span className={"upcomingTitle"}>{movie.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Latest;
