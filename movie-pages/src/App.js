import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

function App() {
  const activeStyle = {
    background: "lightcyan",
    color: "seagreen",
  };

  return (
    <div className="App">
      <h1>MOVIE PAGE</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/latest" activeStyle={activeStyle}>
            Latest
          </NavLink>
        </li>
      </ul>
      <hr />
      <MainRouter />
    </div>
  );
}

export default App;
