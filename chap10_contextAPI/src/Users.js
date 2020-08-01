import React, { useState } from "react";
import User from "./User";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const fetchData = () => getUsers(dispatch);

  const { loading, error, data: users } = state.users;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!users) return <button onClick={fetchData}>Fetch</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>Refetch Data</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
