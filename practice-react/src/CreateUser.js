import React, { useContext } from 'react';
import { MyContext } from './App.js';

const CreateUser = () => {
  const context = useContext(MyContext);
  const { onChange, username, email, onCreate } = context;

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
