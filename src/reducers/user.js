import {SET_ADDRESS} from "../constants";

export default function user(state = {
  address: "",
  tokens: [],
  transactions: [],
}, action) {
  const payload = action.payload;
  switch (action.type) {
    case SET_ADDRESS:
    default:
      return state;
  }
}
