import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        misae: action.misae,
        error: null,
        loading: false,
      };
    case "ERROR":
      return {
        misae: null,
        error: action.error,
        loading: false,
      };
    case "LOADING":
      return {
        misae: null,
        error: null,
        loading: true,
      };
    default:
      throw new Error("ERROR");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    misae: null,
    error: null,
    loading: false,
  });

  const getMisae = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99"
      );
      dispatch({
        type: "SUCCESS",
        misae: response.data.RealtimeCityAir.row,
        error: null,
        loading: false,
      });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    getMisae();
  }, []);

  const { misae, error, loading } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!misae) return null;

  return (
    <>
      <ul>
        {misae.map((m) => {
          return (
            <li key={m.MSRSTE_NM}>
              {m.MSRSTE_NM}: {m.IDEX_NM}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
