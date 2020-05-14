import React, { useReducer } from "react";
import List from "./List";

const initialState = {
  info: [{ key: 1, name: "김우정", phone: "01080242242" }],
  inputs: {
    name: "",
    phone: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CLICK":
      return {
        ...state,
        inputs: initialState.inputs,
        info: state.info.concat(action.info),
      };
    default:
  }
};

const Book = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUTS",
      name,
      value,
    });
  };

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

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          value={state.inputs.name}
          onChange={onChange}
        />
        <input
          name="phone"
          type="text"
          value={state.inputs.phone}
          onChange={onChange}
        />
        <button onClick={onClick}>등록</button>
      </div>
      <div>
        <List info={state.info} />
      </div>
    </>
  );
};

export default Book;
