import './App.css';
import React, { createContext } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';
import useData from './Hooks.js';

export const UserDispatch = createContext(null);

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
  ] = useData();
  return (
    <>
      <CreateUser
        onCreate={onCreate}
        onChange={onChange}
        username={username}
        email={email}
      />
      <UserList onRemove={onRemove} onToggle={onToggle} users={users} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
