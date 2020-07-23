import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import StyledButton from "./Components/StyledButton";
import Dialog from "./Components/Dialog";
// import CheckboxWrapper from "./Components/CheckboxWrapper";
// import Buttons from "./Components/Buttons";

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
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
  const [dialog, setDialog] = useState(false);
  const onClick = () => setDialog(true);

  const onConfirm = () => {
    console.log("yes");
    setDialog(false);
  };

  const onCancel = () => {
    console.log("no");
    setDialog(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={{ palette }}>
        <>
          <AppBlock>
            <StyledButton size="large" onClick={onClick}>
              BUTTON
            </StyledButton>
          </AppBlock>
          <Dialog
            title="Are you sure..."
            dialog={dialog}
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={dialog}
          >
            you want to quit?
          </Dialog>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
