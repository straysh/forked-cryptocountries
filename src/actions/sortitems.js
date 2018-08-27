/* eslint-disable import/prefer-default-export */
import {
  COUNTRY_DATA_LOADED,
  UPDATE_DATA_LOADED,
  USER_DATA_LOADED,
  SET_COUNTRY_COLOR,
} from '../constants';
import userMockData from 'data/mocks/items';
import allCountries from 'data/all_countries.json';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class SortItemsAction {
  loadAll = state => dispatch => {
    dispatch({ type: UPDATE_DATA_LOADED, payload: [], activeTab: state });
    let resultUser = [];
    const tmp = [];
    for (const [k, v] of Object.entries(allCountries)) {
      if (v.region === state) tmp.push(k);
      userMockData.forEach(item => {
        if (item.itemId === k) {
          item.name = v.name;
          item.code = v.code;
        }
      });
    }
    if (state !== 'all') {
      resultUser = userMockData.filter(item => tmp.includes(item.itemId));
    } else {
      resultUser = userMockData;
    }
    dispatch({ type: USER_DATA_LOADED, payload: resultUser });
    dispatch({ type: SET_COUNTRY_COLOR, payload: resultUser });
    dispatch({ type: COUNTRY_DATA_LOADED, payload: resultUser });
  };
}

export default new SortItemsAction();
