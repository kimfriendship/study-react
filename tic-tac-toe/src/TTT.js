import React from "react";

const TTT = ({ state, setState, setPlay, turn, setTurn, setResult }) => {
  const onClick = (e) => {
    const keys = Object.keys(state);
    const leftTurns = keys.filter((t) => !state[t]).length;
    const t = e.target.className;

    if (state[t] !== "") return;
    if (leftTurns === 0) return;
    if (leftTurns === 1) setPlay(false);

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
