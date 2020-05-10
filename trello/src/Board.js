import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";

const st = classNames.bind(style);

const Board = ({ status }) => {
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
    </div>
  );
};

export default Board;
