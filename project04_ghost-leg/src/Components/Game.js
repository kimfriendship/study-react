import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Game = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, changeInputs } = context;
  const { profiles, cases } = mainState;

  console.log(cases);
  const getValue = (id) => {};

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
      <div className={"hide"}></div>
      <div className={"ladder"}>
        {profiles.map(({ id }) => (
          <div key={id} className={"stick"} />
        ))}
      </div>
      <div className={"inputContainer"}>
        {profiles.map(({ id }) => (
          <input
            key={id}
            className={id}
            placeholder="Enter case"
            onChange={changeInputs}
          />
        ))}
      </div>
      <button className={"goBtn"}>GO!</button>
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
        <span>Go Back</span>
      </button>
    </>
  );
};

export default Game;
