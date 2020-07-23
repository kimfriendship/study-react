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

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
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
          <ButtonGroup>
            <StyledButton size="large">BUTTON</StyledButton>
            <StyledButton>BUTTON</StyledButton>
            <StyledButton size="small">BUTTON</StyledButton>
          </ButtonGroup>
          <ButtonGroup>
            <StyledButton color="pink" size="large">
              BUTTON
            </StyledButton>
            <StyledButton color="pink">BUTTON</StyledButton>
            <StyledButton color="pink" size="small">
              BUTTON
            </StyledButton>
          </ButtonGroup>
          <ButtonGroup>
            <StyledButton size="large" outline color="blue">
              BUTTON
            </StyledButton>
            <StyledButton outline color="blue">
              BUTTON
            </StyledButton>
            <StyledButton size="small" outline color="blue">
              BUTTON
            </StyledButton>
          </ButtonGroup>
          <ButtonGroup>
            <StyledButton size="large" fullWidth>
              BUTTON
            </StyledButton>
            <StyledButton size="large" color="pink" fullWidth>
              BUTTON
            </StyledButton>
            <StyledButton fullWidth size="large" color="blue">
              BUTTON
            </StyledButton>
          </ButtonGroup>
        </AppBlock>
      </ThemeProvider>
    </div>
  );
}

export default App;
