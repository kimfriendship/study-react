import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { GameContext } from "../App.js";

const Main = () => {
  const context = useContext(GameContext);
  const { state, onDecBtn, onIncBtn } = context;

  return (
    <>
      <div className={"players"}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={"downBtn"}
          onClick={onDecBtn}
          color={state.players === 2 ? "lightgrey" : "orange"}
        />
        <span className={"number"}>{state.players}</span>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className={"upBtn"}
          onClick={onIncBtn}
          color={state.players === 10 ? "lightgrey" : "orange"}
        />
      </div>
      <button className={"startBtn"}>START</button>
    </>
  );
};

export default Main;
