/* eslint-disable import/prefer-default-export */
import {
  COUNTRY_DATA_LOADED,
  UPDATE_DATA_LOADED,
  USER_DATA_LOADED,
  SET_COUNTRY_COLOR,
} from '../constants';
import userMockData from 'data/mocks/all_items';
import allCountries from '../data/all_countries.json';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class SetCountiesColorAction {
  loadSetCountiesColor = (owner, state) => dispatch => {
    // mouseover
    if (!state) {
      const result = userMockData.filter(item => item.owner === owner);
      dispatch({ type: SET_COUNTRY_COLOR, payload: result });
    } else {
      // mouseout
      let resultUser = [];
      if (state !== 'all') {
        const tmp = [];
        for (const [k, v] of Object.entries(allCountries)) {
          if (v.region === state) tmp.push(k);
        }
        resultUser = userMockData.filter(item => tmp.includes(item.itemId));
        dispatch({ type: SET_COUNTRY_COLOR, payload: resultUser });
      } else {
        dispatch({ type: SET_COUNTRY_COLOR, payload: userMockData });
      }
    }
  };
}

export default new SetCountiesColorAction();
