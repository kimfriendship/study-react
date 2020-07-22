import React from "react";
import styled from "styled-components";
// import CheckboxWrapper from "./Components/CheckboxWrapper";
// import Buttons from "./Components/Buttons";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin: 1rem;
  ${(props) =>
    props.huge &&
    `
    width: 10rem;
    height: 10rem;
  `}
`;

function App() {
  return (
    <div className="App">
      <Circle color="blue" />
      <Circle color="green" huge />
    </div>
  );
}

export default App;
