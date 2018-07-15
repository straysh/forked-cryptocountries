/* eslint-disable import/prefer-default-export */
import {USER_DATA_LOADED} from '../constants';
import mockData from 'data/mocks/all_items';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
class UserItemsAction {

  loadAllItems = (fetch)=>async(dispatch) => {
    const resp = await fetch("/foo");
    const result = await resp.json();
    dispatch({type: USER_DATA_LOADED, payload: mockData});
  }
}

export default new UserItemsAction();
