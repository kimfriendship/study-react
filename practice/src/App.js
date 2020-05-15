import './App.css';
import React, { createContext } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import useData from './Hooks.js';

export const MyContext = createContext(null);

function App() {
  const [
    users,
    username,
    email,
    count,
    onChange,
    onCreate,
    onToggle,
    onRemove,
    dispatch,
  ] = useData();
  const data = {
    users,
    username,
    email,
    count,
    onChange,
    onCreate,
    onToggle,
    onRemove,
    dispatch,
  };
  return (
    <MyContext.Provider value={data}>
      <CreateUser />
      <UserList />
      <div>활성 사용자 수: {count}</div>
    </MyContext.Provider>
  );
}

export default App;
