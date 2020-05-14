import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const Header = () => {
  return <h1 className={st('loginTitle')}>로그인</h1>;
};

export default Header;
