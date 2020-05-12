import React, { useState } from "react";
import TTT from "./TTT";

const Layout = () => {
  const [play, setPlay] = useState(true);
  const [turn, setTurn] = useState("X");
  const [state, setState] = useState({
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    t5: "",
    t6: "",
    t7: "",
    t8: "",
    t9: "",
  });

  const [result, setResult] = useState("");

  const onClick = () => {
    setPlay(true);
    setState({
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
    });
  };

  return (
    <div className={"Wrapper"}>
      <h1 className={"title"}>TIC TAC TOE</h1>
      {play ? null : <h2 className={"result"}>{result}</h2>}
      {play ? (
        <h3 className={"turn"}>
          <strong>{turn}</strong>'s turn
        </h3>
      ) : null}
      <div className={"tttWrapper"}>
        <TTT
          state={state}
          setState={setState}
          play={play}
          setPlay={setPlay}
          turn={turn}
          setTurn={setTurn}
          setResult={setResult}
        />
      </div>
      {play ? null : (
        <button className={"restartBtn"} onClick={onClick}>
          RESTART
        </button>
      )}
    </div>
  );
};

export default Layout;
