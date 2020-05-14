import React from 'react';
import classNames from 'classnames/bind';
import style from '../App.css';

const st = classNames.bind(style);

const handleId = () => {
  console.log('사용자 아이디 입력중');
};

const IdInputs = () => {
  return (
    <>
      <span className={st('loginInputs')}>ID:</span>
      <input className={st('loginInputs')} type="text" onChange={handleId} />
    </>
  );
};

export default IdInputs;
