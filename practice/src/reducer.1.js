export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        users: null,
        error: null,
        loading: true,
      };
    case 'SUCCESS':
      return {
        users: action.users,
        error: null,
        loading: false,
      };
    case 'ERROR':
      return {
        users: null,
        error: action.error,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
