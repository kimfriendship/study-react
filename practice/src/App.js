import './App.css';
import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      console.log('writing');
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Wooey',
      email: 'wooey@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Claire',
      email: 'claire@gmail.com',
      active: true,
    },
    {
      id: 3,
      username: 'Eddie',
      email: 'eddie@gmail.com',
      active: false,
    },
  ]);

  const checkUsers = (users) => {
    console.log('counting');
    return users.filter((user) => user.active).length;
  };

  const count = useMemo(() => checkUsers(users), [users]);
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    console.log('click create');
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers((users) => users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    console.log('toggling');
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>{count}</div>
    </>
  );
}

export default App;
