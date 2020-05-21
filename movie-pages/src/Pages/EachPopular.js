import React, { useReducer, useEffect } from "react";
import { moviesApi } from "../api";
import "../App.css";
import { useParams } from "react-router-dom";

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

const EachPopular = () => {
  const params = useParams();
  const id = params.movie_id;

  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: false,
  });

  const fetchMovie = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await moviesApi.getMovie(id);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const { loading, error, data } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!data) return null;

  const {
    poster_path: poster,
    title,
    overview,
    genres,
    release_date: date,
  } = data;

  return (
    <article className={"eachMovie"}>
      <img src={"https://image.tmdb.org/t/p/w500" + poster} alt={title} />
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{overview}</p>
      {genres.map((g) => (
        <span key={g.id}>#{g.name}</span>
      ))}
    </article>
  );
};

export default EachPopular;
