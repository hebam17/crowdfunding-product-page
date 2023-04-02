import { ADD_BACKS } from "./backTypes";

export const usersFetchingSucced = (money) => {
  return {
    type: ADD_BACKS,
    payload: money,
  };
};
