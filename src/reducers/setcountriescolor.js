import {
  SET_ADDRESS,
  SET_TOKEN_LISTS,
  SET_TOKEN_NEW,
  SET_TX_LISTS,
  USER_DATA_LOADED,
  COUNTRY_DATA_LOADED,
  UPDATE_DATA_LOADED,
  SET_COUNTRY_COLOR,
} from '../constants';

export default function setcountriescolor(state = { data: [] }, action) {
  const payload = action.payload;
  switch (action.type) {
    case SET_COUNTRY_COLOR:
      return { state, ...{ data: payload } };
    default:
      return state;
  }
}
