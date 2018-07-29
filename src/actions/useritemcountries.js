/* eslint-disable import/prefer-default-export */
import {
  COUNTRY_DATA_LOADED,
  UPDATE_DATA_LOADED,
  USER_DATA_LOADED,
} from '../constants';
import userMockData from 'data/mocks/all_items';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class UserItemCountriesAction {
  loadUserCoutries = owner => dispatch => {
    if (owner) {
      const result = userMockData.filter(item => item.owner === owner);
      dispatch({ type: COUNTRY_DATA_LOADED, payload: result });
    }
  };
}

export default new UserItemCountriesAction();
