import React, { useReducer, createContext } from "react";
import "./App.css";
import Main from "./Components/Main";
import { reducer, initialState } from "./Reducer";
import Game from "./Components/Game";
import Result from "./Components/Result";

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

  const onStartBtn = () => {
    dispatch({ type: "CHANGE_PAGE", page: "game" });
  };

  const value = { state, onIncBtn, onDecBtn, onStartBtn };

  return (
    <>
      <h1 className={"header"}>사다리 게임</h1>
      <main className={"body"}>
        <GameContext.Provider value={value}>
          {state.page === "main" ? (
            <Main />
          ) : state.page === "game" ? (
            <Game />
          ) : (
            <Result />
          )}
        </GameContext.Provider>
      </main>
    </>
  );
}

export default App;
