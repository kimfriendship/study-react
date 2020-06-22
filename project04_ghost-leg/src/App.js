import React, { useReducer, createContext } from "react";
import "./App.css";
import Main from "./Components/Main";
import { reducer, initialState } from "./Reducer";

export const GameContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIncBtn = () => {
    if (state.players >= 10) return;
    dispatch({ type: "INC_PLAYERS" });
  };

  const onDecBtn = () => {
    if (state.players <= 2) return;
    dispatch({ type: "DEC_PLAYERS" });
  };
  const value = { state, onIncBtn, onDecBtn };

  return (
    <>
      <h1 className={"header"}>사다리 게임</h1>
      <main className={"body"}>
        <GameContext.Provider value={value}>
          <Main />
        </GameContext.Provider>
      </main>
    </>
  );
}

export default App;
