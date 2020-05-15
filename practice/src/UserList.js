import React, { useContext } from 'react';
import { MyContext } from './App.js';

const User = React.memo(({ user }) => {
  const context = useContext(MyContext);
  const { onToggle, onRemove } = context;
  const { username, email, id, active } = user;

  // useEffect(() => {
  //   console.log('Mount');
  //   console.log(user);
  //   return () => {
  //     console.log('Unmount');
  //     console.log(user);
  //   };
  // }, [user]);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

const UserList = () => {
  const context = useContext(MyContext);
  const { users } = context;

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default React.memo(UserList);
