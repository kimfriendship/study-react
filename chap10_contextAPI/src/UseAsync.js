import { useCallback, useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const useAsync = (callback, deps = [], skip) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
    data: null,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });

    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
};

export default useAsync;
