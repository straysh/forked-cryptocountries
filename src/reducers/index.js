import { combineReducers } from 'redux';
import user from './user';
import useritems from './useritems';

export default combineReducers({
  user,
  useritems,
});
