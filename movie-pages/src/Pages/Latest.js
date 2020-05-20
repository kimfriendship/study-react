import React, { useReducer, useEffect } from "react";
import { moviesApi } from "../api";
import "../App.css";

const reducer = (mainState, action) => {
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
  const [mainState, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchMain = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.getUpcoming();
      dispatch({ type: "SUCCESS", data: response.results });
      console.log(response.results);
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchMain();
  }, []);

  const { data: movies, error, loading } = mainState;
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
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <span className={"order"}>
                {order < 9 ? "0" + (order + 1) : order + 1}
              </span>
              <div className={"detail"}>
                <span className={"votes"}>추천수 {movie.vote_count}</span>
                <span className={"title"}>{movie.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Latest;
