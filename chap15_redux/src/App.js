import React from "react";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import TodosContainer from "./container/TodosContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
