export const mainInitialState = {
  page: "main",
  players: 2,
  profiles: [],
};

export const mainReducer = (mainState, action) => {
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...mainState,
        players: +mainState.players + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...mainState,
        players: +mainState.players - 1,
      };
    case "CHANGE_PAGE":
      return {
        ...mainState,
        page: action.page,
      };
    case "GET_PROFILES":
      return {
        ...mainState,
        profiles: action.profiles,
      };
    default:
      throw new Error("ERROR");
  }
};
