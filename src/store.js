import { createStore } from "redux";

const initialState = {
  power: true,
  display: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POWERON":
      return {
        ...state,
        power: true,
        display: "",
      };

    case "POWEROFF":
      return {
        ...state,
        power: false,
        display: "",
      };

    case "CHANGING":
      if (state.power) {
        return {
          ...state,
          display: action.payload,
        };
      } else {
        return { ...state, display: "" };
      }
  }
};

const store = createStore(reducer, initialState);

export default store;
