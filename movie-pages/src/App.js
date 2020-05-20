import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

function App() {
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="App">
      <h1 className={"header"}>MOVIE PAGE</h1>
      <ul className={"nav"}>
        <li className={"menu"}>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Main
          </NavLink>
        </li>
        <li className={"menu"}>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li className={"menu"}>
          <NavLink to="/latest" activeStyle={activeStyle}>
            Latest
          </NavLink>
        </li>
      </ul>
      <MainRouter />
    </div>
  );
}

export default App;
