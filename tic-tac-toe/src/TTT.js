import React from "react";

const TTT = ({ state, setState, play, setPlay, turn, setTurn, setResult }) => {
  const onClick = (e) => {
    const values = Object.keys(state).map((t) => state[t]);
    const leftTurns = values.filter((t) => !t).length;
    const t = e.target.className;

    if (!play) return;
    if (state[t] !== "") return;
    if (leftTurns === 0) return;
    if (leftTurns === 1) setPlay(false);

    setResult(() => {
      if ([0, 1, 2].every((n) => values[n] === values[0] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[0]}!`;
      }
      if ([3, 4, 5].every((n) => values[n] === values[3] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[3]}!`;
      }
      if ([6, 7, 8].every((n) => values[n] === values[6] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[6]}!`;
      }
      if ([0, 3, 6].every((n) => values[n] === values[0] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[0]}!`;
      }
      if ([1, 4, 7].every((n) => values[n] === values[1] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[1]}!`;
      }
      if ([2, 5, 8].every((n) => values[n] === values[2] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[2]}!`;
      }
      if ([0, 4, 8].every((n) => values[n] === values[0] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[0]}!`;
      }
      if ([2, 4, 6].every((n) => values[n] === values[2] && values[n] !== "")) {
        setPlay(false);
        return `Winner is ${values[2]}!`;
      }

      return "DRAW!";
    });

    setTurn(turn === "X" ? "O" : "X");
    setState({
      ...state,
      [t]: turn,
    });
  };

  return (
    <>
      <div className={"t1"} onClick={onClick}>
        {state.t1}
      </div>
      <div className={"t2"} onClick={onClick}>
        {state.t2}
      </div>
      <div className={"t3"} onClick={onClick}>
        {state.t3}
      </div>
      <div className={"t4"} onClick={onClick}>
        {state.t4}
      </div>
      <div className={"t5"} onClick={onClick}>
        {state.t5}
      </div>
      <div className={"t6"} onClick={onClick}>
        {state.t6}
      </div>
      <div className={"t7"} onClick={onClick}>
        {state.t7}
      </div>
      <div className={"t8"} onClick={onClick}>
        {state.t8}
      </div>
      <div className={"t9"} onClick={onClick}>
        {state.t9}
      </div>
    </>
  );
};

export default TTT;
