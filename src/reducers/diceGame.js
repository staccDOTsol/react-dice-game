import {
  FINISH_MAKE_BETS,
  START_MAKE_BETS,
  SET_BET_AMOUNT,
  SET_BET_NUMBER,
  SET_NUMBER_OF_BETS,
  SET_AUTO_BET,
  GET_FREE_CREDITS,
  SET_MARTINGALE_STRATEGY,
} from '../actionTypes/diceGame';
import { getBetNumber } from '../utils';
import { DEFAULT_BALANCE } from '../constants/diceGame';

const initialState = {
  balance: Number(localStorage.getItem('balance')) || DEFAULT_BALANCE,
  betAmount: null,
  betNumber: null,
  numberOfBets: null,
  resultNumber: getBetNumber(),
  prevResultNumber: null,
  win: false,
  autoBet: false,
  martingaleStrategy: false,
  history: [],
  duringBettingProcess: false,
};

export default function diceGameReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_BET_AMOUNT:
      return { ...state, betAmount: payload.betAmount };
    case SET_BET_NUMBER:
      return { ...state, betNumber: payload.betNumber };
    case FINISH_MAKE_BETS: {
      return {
        ...state,
        prevResultNumber: payload.prevResultNumber,
        resultNumber: payload.resultNumber,
        win: payload.win,
        balance: Math.round(payload.balance),
        history: payload.history,
        duringBettingProcess: false,
      };
    }
    case START_MAKE_BETS:
      return { ...state, duringBettingProcess: true };
    case SET_NUMBER_OF_BETS:
      return { ...state, numberOfBets: payload.numberOfBets };
    case SET_AUTO_BET:
      return { ...state, autoBet: payload.autoBet };
    case GET_FREE_CREDITS:
      return { ...state, balance: DEFAULT_BALANCE };
    case SET_MARTINGALE_STRATEGY:
      return { ...state, martingaleStrategy: payload.martingaleStrategy };
    default:
      return state;
  }
}
