import React, { useContext } from "react";
import { GameContext } from "../App.js";

const Cases = () => {
  const context = useContext(GameContext);
  const { mainState, getInputs } = context;
  const { profiles, game, cases } = mainState;

  if (game === "start") {
    return (
      <>
        {profiles.map(({ id }, i) => (
          <input
            key={id}
            className={i}
            placeholder={`case${i + 1}`}
            onChange={getInputs}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        {profiles.map(({ id }, i) => (
          <span key={id} className={"caseSpans"}>
            {cases[i]}
          </span>
        ))}
      </>
    );
  }
};

export default Cases;
