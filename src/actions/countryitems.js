/* eslint-disable import/prefer-default-export */
import {COUNTRY_DATA_LOADED} from '../constants';
import mockData from 'data/mocks/all_items';
// import Country from "../routes/country/Country";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class CountryItemsAction {
  loadAllItems = (fetch) => async (dispatch) => {
    const resp = await fetch("/foo");
    const result = await resp.json();
    dispatch({type: COUNTRY_DATA_LOADED, payload: mockData});
  }
}

export default new CountryItemsAction();
