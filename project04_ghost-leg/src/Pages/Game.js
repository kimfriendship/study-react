import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Canvas from "../Components/Canvas.js";
import Cases from "../Components/Cases.js";

const Game = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, startGame } = context;
  const { profiles, game } = mainState;

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
      {game === "start" ? <div className={"ladderHide"}></div> : <Canvas />}
      {game === "end" ? <div className={"ladderCover"}></div> : null}
      <div className={"casesContainer"}>
        <Cases />
      </div>
      {game === "start" ? (
        <button className={"goBtn"} onClick={startGame}>
          GO!
        </button>
      ) : game === "end" ? (
        <button className={"resultBtn"}>See All Results</button>
      ) : null}
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
        <span>Go Back</span>
      </button>
    </>
  );
};

export default Game;
