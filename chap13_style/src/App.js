import React from "react";
import styled, { ThemeProvider } from "styled-components";
import StyledButton from "./Components/StyledButton";
// import CheckboxWrapper from "./Components/CheckboxWrapper";
// import Buttons from "./Components/Buttons";

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  padding: 1rem;
  border: 1px solid black;
`;

const palette = {
  blue: "#1c7ed6",
  green: "#0ca678",
  pink: "#faa2c1",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={{ palette }}>
        <AppBlock>
          <StyledButton>BUTTON</StyledButton>
          <StyledButton color="pink">BUTTON</StyledButton>
          <StyledButton color="blue">BUTTON</StyledButton>
        </AppBlock>
      </ThemeProvider>
    </div>
  );
}

export default App;
