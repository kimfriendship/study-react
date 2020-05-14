import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const handlePw = () => {
  console.log('사용자 비밀번호 입력중');
};

const PwInputs = () => {
  return (
    <>
      <span className={st('loginInputs')}>PW:</span>
      <input
        className={st('loginInputs')}
        type="password"
        onChange={handlePw}
      />
    </>
  );
};

export default PwInputs;
