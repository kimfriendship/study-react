import React, { useReducer, createContext } from "react";
import "./App.css";
import Main from "./Components/Main";
import { mainReducer, mainInitialState } from "./Reducer";
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
  };

  const goBackBtn = () => {
    const page = mainState.page === "game" ? "main" : "game";
    dispatch({ type: "CHANGE_PAGE", page });
  };

  const data = [
    {
      id: 1,
      name: "coala",
      src: "https://image.flaticon.com/icons/svg/3069/3069172.svg",
    },
    {
      id: 2,
      name: "bird",
      src: "https://image.flaticon.com/icons/svg/3069/3069186.svg",
    },
    {
      id: 3,
      name: "penguin",
      src: "https://image.flaticon.com/icons/svg/3069/3069217.svg",
    },
    {
      id: 4,
      name: "frog",
      src: "https://image.flaticon.com/icons/svg/3069/3069170.svg",
    },
    {
      id: 5,
      name: "dog",
      src: "https://image.flaticon.com/icons/svg/3069/3069267.svg",
    },
    {
      id: 6,
      name: "giraffe",
      src: "https://image.flaticon.com/icons/svg/3069/3069201.svg",
    },
    {
      id: 7,
      name: "crocodile",
      src: "https://image.flaticon.com/icons/svg/3069/3069234.svg",
    },
    {
      id: 8,
      name: "horse",
      src: "https://image.flaticon.com/icons/svg/3069/3069284.svg",
    },
    {
      id: 9,
      name: "fox",
      src: "https://image.flaticon.com/icons/svg/3069/3069166.svg",
    },
    {
      id: 10,
      name: "elephant",
      src: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    },
  ];

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

  const changeInputs = ({ target }) => {
    console.log(target.className);
    const id = target.className;
    const value = target.value;
    dispatch({ type: "CHANGE_INPUTS", id, value });
  };

  const value = {
    mainState,
    onIncBtn,
    onDecBtn,
    onStartBtn,
    goBackBtn,
    changeInputs,
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
