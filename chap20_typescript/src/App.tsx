import React from 'react';
import './App.css';
import CounterContainer from './container/CounterContainer';
import GithubProfileLoader from './container/GithubProfileLoader';
import TodoApp from './container/TodoApp';

function App() {
  return (
    <>
      <CounterContainer />
      <TodoApp />
      <GithubProfileLoader />
    </>
  );
}

export default App;
