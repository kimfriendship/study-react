import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { reducer } from './reducer.1';

const Users = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: null,
    error: null,
    loading: false,
  });

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users/',
      );

      dispatch({
        type: 'SUCCESS',
        users: response.data,
      });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e.response.status });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { users, error, loading } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} {user.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          fetchUsers();
        }}
      >
        ReFetch
      </button>
    </>
  );
};

export default Users;
