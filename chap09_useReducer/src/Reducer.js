export const initialState = {
  info: [{ key: 1, name: "김우정", phone: "01080242242" }],
  inputs: {
    name: "",
    phone: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUTS":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CLICK":
      return {
        ...state,
        inputs: initialState.inputs,
        info: state.info.concat(action.info),
      };
    default:
  }
};
