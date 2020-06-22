import React, { useContext } from "react";
import { GameContext } from "../App.js";

const Game = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn } = context;
  const { profiles } = mainState;

  return (
    <>
      <ul className={"profiles"}>
        {profiles.map(({ id, name, src }) => {
          return (
            <li key={id} className={"profile"}>
              <img src={src} alt={name} />
            </li>
          );
        })}
      </ul>
      <div>ladder</div>
      <button onClick={goBackBtn}>Go Back</button>
    </>
  );
};

export default Game;
