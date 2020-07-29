import React from "react";
import axios from "axios";
import useAsync from "./UseAsync";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const Users = () => {
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, error, data: users } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!users) return <button onClick={refetch}>Fetch</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch Data</button>
    </>
  );
};

export default Users;
