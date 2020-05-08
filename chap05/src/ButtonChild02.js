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

  const handleClick = () => {
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(title)) {
      check_title = "Purple Button";
    } else {
      check_title = "보라색 버튼";
    }
  };

  return (
    <button style={ButtonStyle} onClick={handleClick}>
      {check_title}
    </button>
  );
};

ButtonChild02.propTypes = {
  title: PropTypes.string,
};

export default ButtonChild02;
