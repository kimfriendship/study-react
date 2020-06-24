import React, { useReducer, createContext } from "react";
import "./App.css";
import Main from "./Components/Main";
import { mainReducer, mainInitialState, data } from "./Reducer";
import Game from "./Components/Game";
import Result from "./Components/Result";

export const GameContext = createContext({});

function App() {
  const [mainState, dispatch] = useReducer(mainReducer, mainInitialState);

  const onIncBtn = () => {
    if (mainState.players >= 10) return;
    dispatch({ type: "INC_PLAYERS" });
  };

  const onDecBtn = () => {
    if (mainState.players <= 2) return;
    dispatch({ type: "DEC_PLAYERS" });
  };

  const onStartBtn = () => {
    dispatch({ type: "CHANGE_PAGE", page: "game" });
    getProfiles(mainState.players);
    getLegs();
  };

  const goBackBtn = () => {
    const page = mainState.page === "game" ? "main" : "game";
    dispatch({ type: "CHANGE_PAGE", page });
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getProfiles = (players) => {
    let array = [getRandom(0, 9)];

    for (let i = 1; i < players; i++) {
      let index = getRandom(0, 9);
      if (array.includes(index)) {
        i--;
      } else {
        array = [...array, index];
      }
    }

    dispatch({
      type: "GET_PROFILES",
      profiles: array.map((index) => data[index]),
    });
  };

  const getInputs = ({ target }) => {
    const id = target.className;
    const value = target.value;
    dispatch({ type: "GET_INPUTS", id, value });
  };

  const getLegs = () => {
    let legs = [];

    for (let i = 1; i < mainState.players; i++) {
      const count = getRandom(1, 4);

      for (let j = 1; j <= count; j++) {
        const p = getRandom(1, 9);
        const again = legs.filter(
          ({ line, pos }) => (line === i || line === i - 1) && pos === p
        );

        console.log(again);
        if (again.length) {
          j--;
        } else {
          legs = legs.concat({ line: i, pos: p });
        }
      }
    }

    dispatch({ type: "GET_LEGS", legs });
  };

  const value = {
    mainState,
    onIncBtn,
    onDecBtn,
    onStartBtn,
    goBackBtn,
    getInputs,
    getRandom,
  };

  return (
    <>
      <h1 className={"header"}>사다리 게임</h1>
      <main className={"body"}>
        <GameContext.Provider value={value}>
          {mainState.page === "main" ? (
            <Main />
          ) : mainState.page === "game" ? (
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
