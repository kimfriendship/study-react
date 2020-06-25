export const mainInitialState = {
  page: "main",
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
  },
  {
    id: 2,
    name: "pig",
    src: "https://image.flaticon.com/icons/svg/3069/3069273.svg",
    color: "lightpink",
  },
  {
    id: 3,
    name: "penguin",
    src: "https://image.flaticon.com/icons/svg/3069/3069217.svg",
    color: "black",
  },
  {
    id: 4,
    name: "cameleon",
    src: "https://image.flaticon.com/icons/svg/3069/3069230.svg",
    color: "lightgreen",
  },
  {
    id: 5,
    name: "dog",
    src: "https://image.flaticon.com/icons/svg/3069/3069267.svg",
    color: "sandybrown",
  },
  {
    id: 6,
    name: "giraffe",
    src: "https://image.flaticon.com/icons/svg/3069/3069201.svg",
    color: "burlywood",
  },
  {
    id: 7,
    name: "dolphin",
    src: "https://image.flaticon.com/icons/svg/3069/3069269.svg",
    color: "skyblue",
  },
  {
    id: 8,
    name: "horse",
    src: "https://image.flaticon.com/icons/svg/3069/3069284.svg",
    color: "maroon",
  },
  {
    id: 9,
    name: "fox",
    src: "https://image.flaticon.com/icons/svg/3069/3069166.svg",
    color: "tomato",
  },
  {
    id: 10,
    name: "elephant",
    src: "https://image.flaticon.com/icons/svg/3069/3069224.svg",
    color: "lightsteelblue",
  },
];
