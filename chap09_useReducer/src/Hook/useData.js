import { useReducer, useCallback } from "react";
import { reducer, initialState } from "../Reducer.js";

const useData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      dispatch({
        type: "CHANGE_INPUTS",
        name,
        value,
      });
    },
    [state]
  );

  const onClick = () => {
    dispatch({
      type: "CLICK",
      info: {
        key: Math.random(),
        name: state.inputs.name,
        phone: state.inputs.phone,
      },
    });
  };

  return [state, onChange, onClick];
};

export default useData;
