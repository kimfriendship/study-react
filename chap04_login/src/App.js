import React, { Component } from 'react';
import './App.css';

class App extends Component {
  loginBtn = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
  };

  render() {
    return (
      <form>
        <h1>로그인</h1>
        <div>
          <span>ID:</span>
          <input onKeyUp={() => console.log('사용자 아이디 입력중')} />
          <span>PW:</span>
          <input onKeyUp={() => console.log('사용자 아이디 입력중')} />
          <button type="submit" onClick={this.loginBtn}>
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default App;
