import React, { useEffect } from 'react';

const User = React.memo(({ user, onRemove, onToggle }) => {
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

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList);