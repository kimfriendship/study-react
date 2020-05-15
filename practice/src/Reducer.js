export const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'Wooey',
      email: 'wooey@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Claire',
      email: 'claire@gmail.com',
      active: true,
    },
    {
      id: 3,
      username: 'Eddie',
      email: 'eddie@gmail.com',
      active: false,
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error('ERROR');
  }
}
