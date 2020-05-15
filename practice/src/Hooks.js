import { useRef, useReducer, useMemo, useCallback } from 'react';

import { reducer, initialState } from './Reducer.js';

const useData = () => {
  const nextId = useRef(4);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const countActiveUsers = (users) => {
    return users.filter((user) => user.active).length;
  };

  const count = useMemo(() => {
    return countActiveUsers(users);
  }, [users]);

  return [
    users,
    username,
    email,
    count,
    onChange,
    onCreate,
    onToggle,
    onRemove,
  ];
};

export default useData;
