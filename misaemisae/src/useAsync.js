import { useReducer, useEffect } from "react";

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

const useAsync = (callback, deps = []) => {
  const [state, dispatch] = useReducer(reducer, {
    misae: null,
    error: null,
    loading: false,
  });

  const fetchMisae = async () => {
    dispatch({ type: "LOADING" });
    try {
      const { data } = await callback();
      dispatch({
        type: "SUCCESS",
        misae: data.RealtimeCityAir.row,
        error: null,
        loading: false,
      });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchMisae();
  }, deps);

  return [state, fetchMisae];
};

export default useAsync;
