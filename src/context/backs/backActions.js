import { ADD_BACKS } from "./backTypes";

export const addingBacks = (money) => {
  return {
    type: ADD_BACKS,
    payload: money,
  };
};
