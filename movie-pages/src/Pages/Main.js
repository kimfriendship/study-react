import React, { useReducer, useEffect } from "react";
import { moviesApi } from "../api";

const reducer = (mainState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        data: null,
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
      return mainState;
  }
};

const Main = () => {
  const [mainState, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchMain = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.getPopular();
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
  if (!movies) return null;

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.original_title}: {movie.popularity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
