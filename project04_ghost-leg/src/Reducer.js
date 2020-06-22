export const initialState = {
  page: "main",
  players: 2,
  legs: [],
  cases: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...state,
        players: +state.players + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...state,
        players: +state.players - 1,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.page,
      };
    default:
      throw new Error("ERROR");
  }
};
