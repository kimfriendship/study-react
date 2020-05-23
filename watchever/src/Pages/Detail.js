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

const Detail = ({ history }) => {
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
    if (id === "latest") return;
    fetchMovie();
  }, []);

  const { loading, error, data } = state;
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
      <img
        className={"detailPoster"}
        src={"https://image.tmdb.org/t/p/w500" + poster}
        alt={title}
      />
      <div className={"infoWrapper"}>
        <h2 className={"detailTitle"}>{title}</h2>
        <strong>{date}</strong>
        <ul className={"genres"}>
          {genres.map((g) => (
            <li key={g.id}>#{g.name}</li>
          ))}
        </ul>
        <p className={"overview"}>{overview}</p>
        <button className={"gobackBtn"} onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
    </article>
  );
};

export default Detail;
