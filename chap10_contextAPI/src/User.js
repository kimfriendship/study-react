import React, { useEffect } from "react";
import { useUsersDispatch, useUsersState, getUser } from "./UsersContext";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { loading, error, data: user } = state.user;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR!</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
    </div>
  );
};

export default User;
