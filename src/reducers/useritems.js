import {SET_ADDRESS, SET_TOKEN_LISTS, SET_TOKEN_NEW, SET_TX_LISTS, USER_DATA_LOADED} from "../constants";

export default function useritems(state = {
  data: [],
}, action) {
  const payload = action.payload;
  switch (action.type) {
    case USER_DATA_LOADED:
      return {state, ...{data: payload}};
    default:
      return state;
  }
}
