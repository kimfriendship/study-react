import React, { useState } from "react";
import Child from "./Child.js";
import "./App.css";

function App() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const ParentLotto = lotto;
  const makeLotto = () => {};

  return (
    <div className="App">
      <Child />
    </div>
  );
}

export default App;
