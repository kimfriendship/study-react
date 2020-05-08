import React, { Component } from "react";
import PropTypes from "prop-types";

const ButtonChild02 = ({ title, color }) => {
  const ButtonStyle = {
    border: "none",
    width: 100,
    height: 30,
    background: color,
  };
  let check_title = title;
  const handleButtonClick = () => {
    console.log("Button Child02 클릭!");
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(title)) {
      console.log("한글");
      check_title = "Purple Button";
    } else {
      console("영어");
      check_title = "보라색 버튼";
    }
  };
  return (
    <button style={ButtonStyle} onClick={handleButtonClick}>
      {check_title}
    </button>
  );
};

ButtonChild02.propTypes = {
  title: PropTypes.number,
};

export default ButtonChild02;
