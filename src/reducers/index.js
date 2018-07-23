import { combineReducers } from 'redux';
import user from './user';
import useritems from './useritems';
import countryitems from './countryitems';

export default combineReducers({
  user,
  useritems,
  countryitems,
});
