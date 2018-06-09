import { combineReducers } from 'redux';

import balanceReducer from './reducers/balance';
import diceGameReducer from './reducers/diceGame';


export default combineReducers({
  balance: balanceReducer,
  diceGame: diceGameReducer,
});
