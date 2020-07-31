import React, { useState } from "react";
import axios from "axios";
import User from "./User";
import { useAsync } from "react-async";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);
  const { data: users, error, isLoading, reload, run } = useAsync({
    deferFn: getUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!users) return <button onClick={run}>Fetch</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={reload}>Refetch Data</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
