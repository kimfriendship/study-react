import React, { useContext } from "react";
import { GameContext } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRedo } from "@fortawesome/free-solid-svg-icons";

const Results = () => {
  const context = useContext(GameContext);
  const { mainState, goBackBtn, newGame } = context;
  const { profiles, game, results } = mainState;

  const check = profiles.map(({ name, result }) => name + result);
  console.log(check);
  console.log(results);

  return (
    <div>
      <h2 className={"resultsTitle"}>결과</h2>
      <button className={"resultsBtn"} onClick={newGame}>
        <span>새로운 게임</span>
        <FontAwesomeIcon icon={faRedo} className={"icon"} size={"2x"} />
      </button>
      <button onClick={goBackBtn} className={"goBackBtn"}>
        <span>뒤로 가기</span>
        <FontAwesomeIcon icon={faArrowLeft} className={"icon"} size={"2x"} />
      </button>
    </div>
  );
};

export default Results;
