import { GET_FREE_CREDITS } from '../actionTypes/balance';
import { MAKE_BET_SUCCESS } from '../actionTypes/diceGame';
import { DEFAULT_BALANCE } from '../constants/balance';


export default function balanceReducer(state = {}, { type, payload }) {
  switch (type) {
    case MAKE_BET_SUCCESS:
      return { ...state, value: Math.round(payload.balance) };
    case GET_FREE_CREDITS:
      return { ...state, value: DEFAULT_BALANCE };
    default:
      return state;
  }
}
