import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyModal from "./MyModal";
import ModalPortal from "./ModalPortal";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ModalPortal>
        <MyModal />
      </ModalPortal>
    </div>
  );
}

export default App;
