export const mainInitialState = {
  page: "main",
  players: 2,
  profiles: [],
  cases: {},
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
    case "CHANGE_INPUTS":
      return {
        ...mainState,
        cases: {
          ...mainState.cases,
          [action.id]: action.value,
        },
      };
    default:
      throw new Error("ERROR");
  }
};
