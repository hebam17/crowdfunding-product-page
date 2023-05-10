import { createContext, useReducer } from "react";
import { ADD_BACKS } from "./backTypes";

export const backContext = createContext(null);

const initialState = {
  backedMoney: 89914,
  backedExpected: 100000,
  backers: "5007",
  daysLeft: 56,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BACKS:
      return {
        ...state,
        backedMoney: state.backedMoney + action.payload,
        backers: state.backers + 1,
      };

    default:
      return state;
  }
};

export function BackContextProvider({ children }) {
  const [backState, backDispatch] = useReducer(reducer, initialState);
  return (
    <backContext.Provider value={{ backState, backDispatch }}>
      {children}
    </backContext.Provider>
  );
}
