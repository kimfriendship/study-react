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

  const [category, setCategories] = useState({
    wooey: ["친구들 만나기", "맛난거 먹기"],
  });

  const [todos, setTodos] = useState([
    {
      id: 0,
      lists: ["멍충이들", "해물들", "상명아이들"],
    },
    {
      id: 2,
      lists: ["수플레", "치즈케이크", "빙수"],
    },
  ]);

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

  const clickLogout = () => {
    setUser({
      ...user,
      status: false,
    });
  };

  return (
    <>
      <Header
        userId={user.userId}
        status={user.status}
        clickLogout={clickLogout}
      />
      <Login
        inputs={inputs}
        status={user.status}
        inputLogin={inputLogin}
        clickLogin={clickLogin}
      />
      <Board
        status={user.status}
        category={category[user.userId]}
        todos={todos}
      />
    </>
  );
}

export default App;
