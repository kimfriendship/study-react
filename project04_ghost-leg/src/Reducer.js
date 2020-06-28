export const mainInitialState = {
  page: "main",
  game: "start",
  players: 2,
  profiles: [],
  legs: [],
  ladder: [],
  cases: {},
};

export const mainReducer = (mainState, action) => {
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...mainState,
        players: mainState.players + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...mainState,
        players: mainState.players - 1,
      };
    case "CHANGE_PAGE":
      return {
        ...mainState,
        page: action.page,
      };
    case "START_GAME":
      return {
        ...mainState,
        game: action.game,
      };
    case "GET_PROFILES":
      return {
        ...mainState,
        profiles: action.profiles,
      };
    case "GET_INPUTS":
      return {
        ...mainState,
        cases: {
          ...mainState.cases,
          [action.id]: action.value,
        },
      };
    case "GET_LEGS":
      return {
        ...mainState,
        legs: action.legs,
      };
    case "GET_LADDER":
      return {
        ...mainState,
        ladder: action.ladder,
      };
    case "GET_RESULTS":
      return {
        ...mainState,
        profiles: mainState.profiles.map((p, i) => {
          return i === action.index ? { ...p, result: action.result } : p;
        }),
      };
    default:
      throw new Error("ERROR");
  }
};

export const data = [
  {
    id: 1,
    name: "rabbit",
    src: "https://image.flaticon.com/icons/svg/3069/3069187.svg",
    color: "lightgray",
    result: 0,
  },
  {
    id: 2,
    name: "pig",
    src: "https://image.flaticon.com/icons/svg/3069/3069273.svg",
    color: "lightpink",
    result: 0,
  },
  {
    id: 3,
    name: "penguin",
    src: "https://image.flaticon.com/icons/svg/3069/3069217.svg",
    color: "darkslategray",
    result: 0,
  },
  {
    id: 4,
    name: "cameleon",
    src: "https://image.flaticon.com/icons/svg/3069/3069230.svg",
    color: "lightseagreen",
    result: 0,
  },
  {
    id: 5,
    name: "dog",
    src: "https://image.flaticon.com/icons/svg/3069/3069267.svg",
    color: "sandybrown",
    result: 0,
  },
  {
    id: 6,
    name: "giraffe",
    src: "https://image.flaticon.com/icons/svg/3069/3069201.svg",
    color: "burlywood",
    result: 0,
  },
  {
    id: 7,
    name: "dolphin",
    src: "https://image.flaticon.com/icons/svg/3069/3069269.svg",
    color: "skyblue",
    result: 0,
  },
  {
    id: 8,
    name: "horse",
    src: "https://image.flaticon.com/icons/svg/3069/3069284.svg",
    color: "maroon",
    result: 0,
  },
  {
    id: 9,
    name: "fox",
    src: "https://image.flaticon.com/icons/svg/3069/3069166.svg",
    color: "tomato",
    result: 0,
  },
  {
    id: 10,
    name: "elephant",
    src: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    color: "lightsteelblue",
    result: 0,
  },
];
