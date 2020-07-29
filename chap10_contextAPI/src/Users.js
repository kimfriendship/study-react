import React, { useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
    data: null,
  });

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, error, data } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!data) return null;

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={fetchUsers}>Refetch Data</button>
    </>
  );
};

export default Users;
