import { combineReducers } from 'redux';
import user from './user';
import useritems from './useritems';
import countryitems from './countryitems';
import sortitems from './sortitems';
import setcountriescolor from './setcountriescolor';

export default combineReducers({
  user,
  useritems,
  countryitems,
  sortitems,
  setcountriescolor,
});
