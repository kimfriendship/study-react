import React, { useState } from "react";
import Login from "./Login.js";
import Header from "./Header.js";
import Board from "./Board.js";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    key: 1,
    userId: "wooey",
    userPw: "asdf",
    status: false,
  });

  const [category, setCategories] = useState({
    wooey: [
      { key: 1, title: "study" },
      { key: 2, title: "play" },
    ],
  });

  const [todos, setTodos] = useState({
    wooey: [
      { key: 1, title: "study", content: "react" },
      { key: 2, title: "study", content: "js" },
      { key: 3, title: "study", content: "html/css" },
      { key: 4, title: "play", content: "netflix" },
      { key: 5, title: "play", content: "sleep" },
    ],
  });

  const [boardInputs, setBoardInputs] = useState("");
  const [todoInputs, setTodoInputs] = useState("");

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

  const createTitle = (e) => {
    if (e.key !== "Enter") return;

    setCategories({
      [user.userId]: [
        ...category[user.userId],
        { key: 10, title: e.target.value },
      ],
    });
    setBoardInputs("");
  };

  const changeTitle = (e) => {
    setBoardInputs(e.target.value);
  };

  const createTodo = (e) => {
    if (e.key !== "Enter") return;

    setTodos({
      [user.userId]: [
        ...todos[user.userId],
        {
          key: 10,
          title: e.target.parentNode.firstElementChild.textContent,
          content: e.target.value,
        },
      ],
    });

    setTodoInputs("");
  };

  const changeTodo = (e) => {
    setTodoInputs(e.target.value);
  };

  const deleteTodos = (e) => {
    const id = user.userId;
    const target = e.target.parentNode.firstElementChild.textContent;
    const leftT = todos[id].filter(({ title }) => title !== target);
    const leftC = category[id].filter(({ title }) => title !== target);
    const isBlank = !todos[id].filter(({ title }) => title === target).length;

    if (isBlank) setCategories({ [id]: [...leftC] });
    setTodos({ [id]: [...leftT] });
  };

  return (
    <>
      <Header
        userId={user.userId}
        status={user.status}
        clickLogout={clickLogout}
      />
      {!user.status ? (
        <Login
          inputs={inputs}
          status={user.status}
          inputLogin={inputLogin}
          clickLogin={clickLogin}
        />
      ) : (
        <Board
          status={user.status}
          category={category[user.userId]}
          todos={todos[user.userId]}
          createTitle={createTitle}
          changeTitle={changeTitle}
          boardInputs={boardInputs}
          changeTodo={changeTodo}
          createTodo={createTodo}
          todoInputs={todoInputs}
          deleteTodos={deleteTodos}
        />
      )}
    </>
  );
}

export default App;
