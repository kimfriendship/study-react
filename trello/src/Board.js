import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Category from "./Category";

const st = classNames.bind(style);

const Board = ({
  category,
  todos,
  createTitle,
  boardInputs,
  changeTitle,
  changeTodo,
  createTodo,
  todoInputs,
  deleteTodos,
}) => {
  return (
    <div className={st("boardWrapper")}>
      <h2 className={st("boardTitle")}>New Board</h2>
      <input
        type="text"
        placeholder="보드 제목을 입력하세요"
        className={st("inputTitle")}
        onKeyUp={createTitle}
        value={boardInputs}
        onChange={changeTitle}
      />
      <Category
        category={category}
        todos={todos}
        boardInputs={boardInputs}
        changeTitle={changeTitle}
        changeTodo={changeTodo}
        createTodo={createTodo}
        todoInputs={todoInputs}
        deleteTodos={deleteTodos}
      />
    </div>
  );
};

export default Board;
