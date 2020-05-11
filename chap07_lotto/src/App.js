import React, { useState, useRef } from "react";
import Child from "./Child.js";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;

  const makeLotto = () => {
    let lottoArray = [];
    for (let i = 0; i <= 6; i++) {
      let number = Math.floor(Math.random() * 45 + 1);
      if (lottoArray.includes(number)) {
        i -= 1;
      } else {
        lottoArray = [...lottoArray, number];
      }
    }
    setLotto(lottoArray);
  };

  const changeInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <h2>부모 컴포넌트</h2>
      <button onClick={makeLotto}>로또 생성기</button>
      <input type="text" ref={inputRef} onChange={changeInput} />
      <h1>{parentLotto.join(",")}</h1>
      <Child lotto={parentLotto} />
    </div>
  );
}

export default App;
