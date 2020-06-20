import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "5px solid lightblue",
    padding: 15,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
