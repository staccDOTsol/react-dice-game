import {
  SET_BALANCE,
  GET_FREE_CREDITS,
} from '../actionTypes/balance';
import { DEFAULT_BALANCE } from '../constants/balance';


export default function balanceReducer(state = {}, { type, payload }) {
  switch (type) {
    case SET_BALANCE:
      if (payload.value < 0) {
        return state;
      }

      return { ...state, value: payload.value };
    case GET_FREE_CREDITS:
      return { ...state, value: DEFAULT_BALANCE };
    default:
      return state;
  }
}
