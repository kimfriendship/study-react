import React, { useState } from "react";
import Login from "./Login.js";
import Header from "./Header.js";
import Board from "./Board.js";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    userId: "wooey",
    userPw: "asdf",
    status: false,
  });
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const inputLogin = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clickLogin = (e) => {
    e.preventDefault();
    if (inputs.id === user.userId && inputs.pw === user.userPw) {
      setUser({
        ...user,
        status: true,
      });
      setInputs({
        id: "",
        pw: "",
      });
    } else {
      alert("Incorrect");
    }
  };

  return (
    <>
      <Header userId={user.userId} status={user.status} />
      <Login inputs={inputs} inputLogin={inputLogin} clickLogin={clickLogin} />
      <Board />
    </>
  );
}

export default App;
