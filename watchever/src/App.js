import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

function App() {
  const activeStyle = {
    borderRadius: "5px",
    background: "white",
    color: "tomato",
    fontWeight: "Bold",
  };

  return (
    <>
      <div className="header">
        <h1 className={"name"}>WATCHEVER</h1>
        <ul className={"nav"}>
          <li className={"menu"}>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Popular
            </NavLink>
          </li>
          <li className={"menu"}>
            <NavLink to="/latest" activeStyle={activeStyle}>
              Upcoming
            </NavLink>
          </li>
          <li className={"menu"}>
            <NavLink to="/search" activeStyle={activeStyle}>
              Search
            </NavLink>
          </li>
          <li className={"menu"}>
            <NavLink to="/about" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <MainRouter />
    </>
  );
}

export default App;
