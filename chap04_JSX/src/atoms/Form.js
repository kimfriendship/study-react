import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('로그인 시도');
};

const Form = ({ children }) => {
  return (
    <form className={st('loginForm')} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
