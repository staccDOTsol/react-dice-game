import { combineReducers } from 'redux';

import balanceReducer from './reducers/balance';


export default combineReducers({
  balance: balanceReducer,
});
