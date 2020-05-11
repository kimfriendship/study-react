import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";
import Category from "./Category";

const st = classNames.bind(style);

const Board = ({ status, category, todos }) => {
  console.log(category);
  return (
    <div
      className={st("boardWrapper")}
      style={{ display: status ? "block" : "none" }}
    >
      <h2 className={st("boardTitle")}>New Board</h2>
      <input
        type="text"
        placeholder="보드 제목을 입력하세요"
        className={st("inputTitle")}
      />
      <Category category={category} todos={todos} />
    </div>
  );
};

export default Board;
