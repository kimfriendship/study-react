import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const Button = () => {
  return (
    <button className={st('loginButton')} type="submit">
      로그인
    </button>
  );
};

export default Button;
