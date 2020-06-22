import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <div className={"players"}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className={"downBtn"} />
        <h2 className={"number"}>2</h2>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className={"upBtn"} />
      </div>
      <button className={"startBtn"}>시작</button>
    </>
  );
};

export default Main;
