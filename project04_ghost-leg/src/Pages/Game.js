import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Canvas from "../Components/Canvas.js";

const Game = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, getInputs } = context;
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
      {/* <div className={"hide"}></div> */}
      <Canvas />
      <div className={"inputContainer"}>
        {profiles.map(({ id }, i) => (
          <input
            key={id}
            className={id}
            placeholder={`case${i + 1}`}
            onChange={getInputs}
          />
        ))}
      </div>
      {/* <button className={"goBtn"}>GO!</button> */}
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
        <span>Go Back</span>
      </button>
    </>
  );
};

export default Game;
