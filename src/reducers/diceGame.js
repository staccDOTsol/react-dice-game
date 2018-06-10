import {
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  MAKE_BET_SUCCESS,
} from '../actionTypes/diceGame';
import { getBetNumber } from '../utils';


const initialState = {
  betAmount: null,
  betNumber: null,
  resultNumber: getBetNumber(),
  prevResultNumber: null,
  win: false,
};

export default function diceGameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: payload.betAmount };
    case SET_BET_NUMBER:
      return { ...state, betNumber: payload.betNumber };
    case MAKE_BET_SUCCESS: {
      return {
        ...state,
        prevResultNumber: state.resultNumber,
        resultNumber: payload.resultNumber,
        win: payload.win,
      };
    }
    default:
      return state;
  }
}
