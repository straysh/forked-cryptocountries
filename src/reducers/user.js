import {SET_ADDRESS, SET_TOKEN_LISTS, SET_TOKEN_NEW, SET_TX_LISTS} from "../constants";

const eth = {name:"ethereum", symbol:"ETH", address:"0x", decimals:18};
export default function user(state = {
  address: "",
  tokens: [],
  transactions: [],
}, action) {
  const payload = action.payload;
  switch (action.type) {
    case SET_ADDRESS:
    case SET_TX_LISTS:
      return {...state, ...payload};
    case SET_TOKEN_NEW:
      return {...state, ...{tokens:[...state.tokens, ...payload.tokens]}};
    case SET_TOKEN_LISTS:
      return {...state, ...{tokens:[eth, ...payload.tokens]}, ...{transactions: []}};
    default:
      return state;
  }
}
