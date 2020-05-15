import React from "react";
import List from "./List";
import useData from "./Hook/useData.js";

const Book = () => {
  const [state, onChange, onClick] = useData();
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
