import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './App.css';

const st = classNames.bind(style);

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
  };

  handleId = () => {
    console.log('사용자 아이디 입력중');
  };

  handlePw = () => {
    console.log('사용자 비밀번호 입력중');
  };

  render() {
    return (
      <form className={st('loginForm')} onSubmit={this.handleSubmit}>
        <h1 className={st('loginTitle')}>로그인</h1>
        <div className={st('loginWrapper')}>
          <span className={st('loginInputs')}>ID:</span>
          <input
            className={st('loginInputs')}
            type="text"
            onChange={this.handleId}
          />
          <span className={st('loginInputs')}>PW:</span>
          <input
            className={st('loginInputs')}
            type="password"
            onChange={this.handlePw}
          />
          <button className={st('loginButton')} type="submit">
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default App;
