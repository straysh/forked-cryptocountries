import {
  SET_ADDRESS,
  SET_TOKEN_LISTS,
  SET_TOKEN_NEW,
  SET_TX_LISTS,
  USER_DATA_LOADED,
  COUNTRY_DATA_LOADED,
  SET_COUNTRY_COLOR,
  UPDATE_DATA_LOADED,
} from '../constants';

export default function sortitems(state = { data: [] }, action) {
  const payload = action.payload;
  switch (action.type) {
    case UPDATE_DATA_LOADED:
      return { state, ...{ data: payload, activeTab: action.activeTab } };
    default:
      return state;
  }
}
