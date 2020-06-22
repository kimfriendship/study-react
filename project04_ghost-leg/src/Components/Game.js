import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      <div className={"inputContainer"}>
        {profiles.map(({ id }) => (
          <input key={id} className={"inputs"} />
        ))}
      </div>
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} />
        Go Back
      </button>
    </>
  );
};

export default Game;
