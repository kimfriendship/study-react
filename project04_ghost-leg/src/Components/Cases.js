import React, { useContext, useEffect } from "react";
import { GameContext } from "../App.js";

const Cases = () => {
  const context = useContext(GameContext);
  const { mainState, getInputs } = context;
  const { profiles, game, cases } = mainState;
  console.log(profiles.map(({ id }) => id));
  console.log(profiles.map(({ id }) => console.log(cases[id])));

  useEffect(() => {
    console.log(cases);
  }, [cases]);

  if (game === "start") {
    return (
      <>
        {profiles.map(({ id }, i) => (
          <input
            key={id}
            className={"caseInputs"}
            placeholder={`case${i + 1}`}
            onChange={getInputs}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        {profiles.map(({ id }) => (
          <span key={id} className={"caseSpans"}>
            {cases[id]}
          </span>
        ))}
      </>
    );
  }
};

export default Cases;
