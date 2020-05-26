import React from "react";
import News from "./News";

const Board = () => {
  return (
    <div>
      <header className={"header"}>
        <h1 className={"logo"}>NEWS</h1>
      </header>
      <ul className={"menuList"}>
        <li>전체</li>
        <li>비즈니스</li>
        <li>엔터테인먼트</li>
        <li>건강</li>
        <li>과학</li>
        <li>스포츠</li>
        <li>기술</li>
      </ul>
      <News />
    </div>
  );
};

export default Board;
