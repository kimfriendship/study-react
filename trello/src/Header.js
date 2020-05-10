import React from "react";
import classNames from "classnames/bind";
import style from "./App.css";

const st = classNames.bind(style);

const Header = ({ status, userId }) => {
  const checkStatus = status ? userId : "로그인 요망";

  return (
    <div className={st("header")}>
      <span className={st("status")}>
        {checkStatus}
        <button
          className={st("logoutBtn")}
          style={{ display: status ? "block" : "none" }}
        >
          로그아웃
        </button>
      </span>
    </div>
  );
};

export default Header;
